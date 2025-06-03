import frappe
from frappe import _
import json

@frappe.whitelist(allow_guest=True, xss_safe=True, csrf_exempt=True)
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
