/* global frappe */
const API = {
  snapshot: "jinish_website.api.get_financial_snapshot",
  predict: "jinish_website.api.get_financial_predictions",
  addUpcoming: "jinish_website.api.add_upcoming_fund",
  listUpcoming: "jinish_website.api.list_upcoming_funds",
  deleteUpcoming: "jinish_website.api.delete_upcoming_fund",
};

function fmt(amount) {
  if (amount === null || amount === undefined) return "—";
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "GBP" }).format(amount);
}

async function call(method, args = {}) {
  // Mirror ArchVerity pattern: use frappe.call which handles CSRF
  const r = await frappe.call({ method, args });
  return r;
}

function showError(msg) {
  console.error(msg);
  const notifications = document.getElementById("notifications");
  if (notifications) {
    const li = document.createElement("li");
    li.className = "error";
    li.textContent = typeof msg === "string" ? msg : (msg?.message || "Unexpected error");
    notifications.prepend(li);
  } else {
    alert(typeof msg === "string" ? msg : (msg?.message || "Unexpected error"));
  }
}

async function loadSnapshot() {
  const { message: s } = await call(API.snapshot);
  document.getElementById("bank-balance").textContent = fmt(s.bank_balance);
  document.getElementById("upcoming-payables").textContent = fmt(s.upcoming_payables_total);
  document.getElementById("monthly-burn").textContent = fmt(s.avg_monthly_burn);
  document.getElementById("restricted-balance").textContent = fmt(s.restricted_balance);
  document.getElementById("unrestricted-balance").textContent = fmt(s.unrestricted_balance);

  const runwayCard = document.getElementById("runway-card");
  const runway = document.getElementById("runway");
  const runwayDetail = document.getElementById("runway-detail");
  runway.textContent = s.runway_months >= 100 ? "> 8 years" : `${s.runway_months.toFixed(1)} months`;
  runwayDetail.textContent = s.next_funding_need_date ? `Funding needed around ${new Date(s.next_funding_need_date).toLocaleDateString()}` : "";
  runwayCard.className = `card ${s.status}`;
}

async function loadPredictions() {
  const { message } = await call(API.predict);
  const notifications = document.getElementById("notifications");
  notifications.innerHTML = "";
  message.alerts.forEach((a) => {
    const li = document.createElement("li");
    li.className = a.severity;
    li.textContent = a.text;
    notifications.appendChild(li);
  });
  // Optional: could render a chart using message.cashflow if needed
}

async function renderUpcomingFunds() {
  const { message } = await call(API.listUpcoming);
  const tbody = document.getElementById("funds-body");
  tbody.innerHTML = "";
  message.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.funder}</td>
      <td>${row.fund_type}</td>
      <td>${fmt(row.amount)}</td>
      <td>${new Date(row.expected_date).toLocaleDateString()}</td>
      <td><button data-id="${row.id}" class="danger small">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
  tbody.querySelectorAll("button[data-id]").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const id = e.target.getAttribute("data-id");
      try {
        await call(API.deleteUpcoming, { id });
        await bootstrap();
      } catch (err) {
        showError(err);
      }
    });
  });
}

async function onAddUpcoming(e) {
  e.preventDefault();
  const payload = {
    funder: document.getElementById("funder").value,
    amount: parseFloat(document.getElementById("amount").value),
    expected_date: document.getElementById("expected_date").value,
    fund_type: document.getElementById("fund_type").value,
  };
  if (!payload.funder || !payload.expected_date) {
    return showError("Please fill funder and expected date.");
  }
  if (!Number.isFinite(payload.amount) || payload.amount <= 0) {
    return showError("Please enter a valid positive amount.");
  }
  try {
    await call(API.addUpcoming, payload);
    e.target.reset();
    await bootstrap();
  } catch (err) {
    showError(err);
  }
}

async function bootstrap() {
  try {
    await Promise.all([
      loadSnapshot(),
      loadPredictions(),
      renderUpcomingFunds(),
    ]);
  } catch (err) {
    showError(err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fund-form").addEventListener("submit", onAddUpcoming);
  bootstrap();
});
