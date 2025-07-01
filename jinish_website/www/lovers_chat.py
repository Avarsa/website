import frappe
from frappe import _

def get_context(context):
    # Ensure only administrators can access this page
    if not frappe.session.user or frappe.session.user == "Guest":
        frappe.local.flags.redirect_location = "/login"
        raise frappe.Redirect
    
    # Check if user has System Manager role (Administrator)
    if not frappe.has_permission("User", "read") or not "System Manager" in frappe.get_roles():
        frappe.throw(_("Access Denied: This area is private"), frappe.PermissionError)
    
    # Disable caching for real-time updates
    context.no_cache = 1
    
    # Set page metadata
    context.title = "Our Private Space"
    context.description = "A sacred space for our hearts to connect"
    
    # Get current user info
    current_user = frappe.get_doc("User", frappe.session.user)
    context.current_user = {
        "name": frappe.session.user,
        "full_name": current_user.full_name or current_user.first_name,
        "image": current_user.user_image
    }
    
    # Meta tags for privacy (no indexing)
    context.metatags = {
        "robots": "noindex, nofollow",
        "title": "Private Space",
        "description": "Private conversation area"
    }
    
    return context 