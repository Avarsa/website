import frappe

no_cache = 1


def get_context(context):
    context.csrf_token = frappe.sessions.get_csrf_token()
    context.title = "Jinish Chandrababu — Software that survives contact with reality"
    context.description = (
        "Personal website of Jinish Chandrababu, building complex software "
        "by learning real-world domains, modelling their rules, and shipping "
        "systems people depend on."
    )
    return context
