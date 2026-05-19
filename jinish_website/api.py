import frappe
from frappe import _
import json

@frappe.whitelist(allow_guest=True)
def submit_contact_form():
    """API endpoint to handle contact form submissions"""
    try:
        # Get form data - handle both JSON and form data
        if frappe.request.method == 'POST':
            if frappe.request.content_type == 'application/json':
                data = frappe.request.get_json()
            else:
                data = frappe.form_dict
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                frappe.throw(_(f"{field.capitalize()} is required"))
        
        # Create a new Communication record to store the contact form data
        communication = frappe.get_doc({
            "doctype": "Communication",
            "subject": f"Website Contact: {data.get('subject')}",
            "content": data.get('message'),
            "sender": data.get('email'),
            "sender_full_name": data.get('name'),
            "sent_or_received": "Received",
            "communication_medium": "Website",
            "communication_type": "Communication",
            "status": "Open"
        })
        
        communication.insert(ignore_permissions=True)
        
        # Send email notification to the site admin
        site_email = frappe.db.get_single_value("Website Settings", "email") or frappe.db.get_single_value("Contact Us Settings", "email_id")
        if site_email:
            frappe.sendmail(
                recipients=[site_email],
                sender=data.get('email'),
                subject=f"New Contact Form Submission: {data.get('subject')}",
                message=f"""<p>You have received a new contact form submission from your website:</p>
                <p><strong>Name:</strong> {data.get('name')}</p>
                <p><strong>Email:</strong> {data.get('email')}</p>
                <p><strong>Subject:</strong> {data.get('subject')}</p>
                <p><strong>Message:</strong></p>
                <p>{data.get('message')}</p>
                """,
                now=True
            )
        
        # Handle redirect if provided
        redirect_to = data.get('redirect_to')
        if redirect_to:
            frappe.local.response["type"] = "redirect"
            frappe.local.response["location"] = redirect_to
            return
            
        return {"message": "success"}
    
    except Exception as e:
        frappe.log_error(f"Contact Form Submission Error: {str(e)}", "Contact Form Error")
        return {"message": "error", "error": str(e)}


# ------------------------------
# Charity Dashboard API Endpoints
# ------------------------------

CACHE_UPCOMING_KEY = "charity_upcoming_funds"
CACHE_SNAPSHOT_KEY = "charity_snapshot_overrides"


def _cache_get(key, default=None):
    cache = frappe.cache()
    val = cache.get_value(key)
    if not val:
        return default
    try:
        return json.loads(val)
    except Exception:
        return default


def _cache_set(key, value):
    cache = frappe.cache()
    cache.set_value(key, json.dumps(value))


def _get_request_json():
    # Support JSON POST and also form/query params (GET/POST)
    if not frappe.request:
        return {}
    try:
        if frappe.request.method == "POST" and getattr(frappe.request, "content_type", "").startswith("application/json"):
            return frappe.request.get_json() or {}
    except Exception:
        pass
    # fallback to form/query dict
    try:
        return frappe.form_dict or {}
    except Exception:
        return {}


@frappe.whitelist(allow_guest=True)
def list_upcoming_funds():
    """Return list of manually entered upcoming funds."""
    funds = _cache_get(CACHE_UPCOMING_KEY, default=[])
    return funds


@frappe.whitelist(allow_guest=True)
def add_upcoming_fund():
    """Add an upcoming fund item (manual input).

    Payload: {funder, amount, expected_date (YYYY-MM-DD), fund_type: restricted|unrestricted}
    """
    data = _get_request_json()
    funder = (data.get("funder") or "").strip()
    amount = float(data.get("amount") or 0)
    expected_date = (data.get("expected_date") or "").strip()
    fund_type = (data.get("fund_type") or "unrestricted").strip().lower()

    if not funder or not amount or not expected_date:
        frappe.throw(_("funder, amount and expected_date are required"))

    if fund_type not in ("restricted", "unrestricted"):
        frappe.throw(_("fund_type must be 'restricted' or 'unrestricted'"))

    funds = _cache_get(CACHE_UPCOMING_KEY, default=[])
    new_item = {
        "id": frappe.generate_hash(length=12),
        "funder": funder,
        "amount": amount,
        "expected_date": expected_date,
        "fund_type": fund_type,
    }
    funds.append(new_item)
    _cache_set(CACHE_UPCOMING_KEY, funds)
    return new_item


@frappe.whitelist(allow_guest=True)
def delete_upcoming_fund():
    data = _get_request_json()
    _id = (data.get("id") or "").strip()
    if not _id:
        frappe.throw(_("id is required"))
    funds = _cache_get(CACHE_UPCOMING_KEY, default=[])
    funds = [f for f in funds if f.get("id") != _id]
    _cache_set(CACHE_UPCOMING_KEY, funds)
    return {"deleted": True}


@frappe.whitelist(allow_guest=True)
def get_financial_snapshot():
    """Return current financial snapshot.

    For demo, reads overrides from cache key 'charity_snapshot_overrides'.
    Expected (optional) fields in overrides:
      bank_balance, upcoming_payables_total, avg_monthly_burn,
      restricted_balance, unrestricted_balance
    """
    overrides = _cache_get(CACHE_SNAPSHOT_KEY, default={}) or {}

    bank_balance = float(overrides.get("bank_balance", 0))
    upcoming_payables_total = float(overrides.get("upcoming_payables_total", 0))
    avg_monthly_burn = float(overrides.get("avg_monthly_burn", 0))
    restricted_balance = float(overrides.get("restricted_balance", 0))
    unrestricted_balance = float(overrides.get("unrestricted_balance", 0))

    available_for_runway = bank_balance + unrestricted_balance - upcoming_payables_total
    if available_for_runway < 0:
        available_for_runway = 0

    if avg_monthly_burn > 0:
        runway_months = available_for_runway / avg_monthly_burn
    else:
        runway_months = 1000  # effectively infinite if no burn provided

    # classify status
    if runway_months >= 6:
        status = "ok"
    elif runway_months >= 3:
        status = "warn"
    else:
        status = "critical"

    # naive next funding need date: add runway_months to today
    next_funding_need_date = None
    try:
        if runway_months < 100:
            from datetime import date, timedelta
            days = int(runway_months * 30)
            next_funding_need_date = (date.today() + timedelta(days=days)).isoformat()
    except Exception:
        pass

    return {
        "bank_balance": bank_balance,
        "upcoming_payables_total": upcoming_payables_total,
        "avg_monthly_burn": avg_monthly_burn,
        "restricted_balance": restricted_balance,
        "unrestricted_balance": unrestricted_balance,
        "runway_months": runway_months,
        "status": status,
        "next_funding_need_date": next_funding_need_date,
    }


@frappe.whitelist(allow_guest=True)
def get_financial_predictions():
    """Return predictions and alerts.

    Demo implementation:
    - Emits alerts based on runway classification
    - Warns if any restricted upcoming fund's expected date is soon
    - Optionally estimates restricted depletion if override 'restricted_monthly_utilization' present
    """
    snap = get_financial_snapshot()
    alerts = []

    # Runway based alerts
    if snap["status"] == "critical":
        alerts.append({
            "severity": "error",
            "text": _("Funding critical: runway under 3 months. Consider raising funds immediately."),
        })
    elif snap["status"] == "warn":
        alerts.append({
            "severity": "warn",
            "text": _("Funding caution: runway under 6 months. Start planning fundraising."),
        })
    else:
        alerts.append({
            "severity": "info",
            "text": _("Healthy runway (6+ months). Keep monitoring."),
        })

    # Upcoming funds reminders
    try:
        from datetime import date, timedelta
        soon = date.today() + timedelta(days=30)
        for f in _cache_get(CACHE_UPCOMING_KEY, default=[]):
            if f.get("expected_date"):
                try:
                    y, m, d = map(int, f["expected_date"].split("-"))
                    if date(y, m, d) <= soon:
                        alerts.append({
                            "severity": "info",
                            "text": _(f"Upcoming {f['fund_type']} fund '{f['funder']}' expected by {f['expected_date']}")
                        })
                except Exception:
                    pass
    except Exception:
        pass

    # Restricted depletion estimate (optional)
    overrides = _cache_get(CACHE_SNAPSHOT_KEY, default={}) or {}
    rm = float(overrides.get("restricted_monthly_utilization", 0))
    if rm and snap.get("restricted_balance", 0) > 0:
        months = snap["restricted_balance"] / rm if rm > 0 else 1000
        if months < 1:
            severity = "error"
        elif months < 3:
            severity = "warn"
        else:
            severity = "info"
        alerts.append({
            "severity": severity,
            "text": _(f"Restricted funds deplete in about {months:.1f} months at current utilization."),
        })

    # Simple cashflow path for next 6 months (demo)
    cashflow = []
    try:
        from datetime import date
        base = snap["bank_balance"] + snap["unrestricted_balance"] - snap["upcoming_payables_total"]
        burn = snap["avg_monthly_burn"]
        for i in range(6):
            base -= burn
            cashflow.append(max(base, 0))
    except Exception:
        pass

    return {
        "alerts": alerts,
        "cashflow": cashflow,
    }


@frappe.whitelist(allow_guest=True)
def set_snapshot_overrides():
    """Set demo snapshot overrides in cache.

    Payload can include: bank_balance, upcoming_payables_total, avg_monthly_burn,
    restricted_balance, unrestricted_balance, restricted_monthly_utilization
    """
    data = _get_request_json()
    if not isinstance(data, dict):
        frappe.throw(_("Invalid payload"))
    # sanitize: only allow known keys
    allowed = {
        "bank_balance",
        "upcoming_payables_total",
        "avg_monthly_burn",
        "restricted_balance",
        "unrestricted_balance",
        "restricted_monthly_utilization",
    }
    overrides = _cache_get(CACHE_SNAPSHOT_KEY, default={}) or {}
    for k in allowed:
        if k in data and data[k] is not None:
            try:
                overrides[k] = float(data[k])
            except Exception:
                overrides[k] = data[k]
    _cache_set(CACHE_SNAPSHOT_KEY, overrides)
    return {"message": "ok", "overrides": overrides}


@frappe.whitelist(allow_guest=True)
def get_snapshot_overrides():
    """Return current demo snapshot overrides (for testing)."""
    return _cache_get(CACHE_SNAPSHOT_KEY, default={}) or {}
