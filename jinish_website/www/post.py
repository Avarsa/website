import frappe

def get_context(context):
    # Get the blog post name from the query string
    blog_name = frappe.form_dict.get('name')
    
    if not blog_name:
        frappe.local.flags.redirect_location = '/posts'
        raise frappe.Redirect
    
    # Try to fetch the blog post by name
    try:
        blog_post = frappe.get_doc('Blog Post', blog_name)
        if not blog_post.published:
            raise frappe.DoesNotExistError
    except frappe.DoesNotExistError:
        frappe.local.flags.redirect_location = '/posts'
        raise frappe.Redirect
    
    # Set the blog post as the doc in the context
    context.doc = blog_post
    
    # Set meta tags
    context.metatags = {
        "title": blog_post.title,
        "description": blog_post.blog_intro or blog_post.title,
        "image": blog_post.meta_image
    }
    
    # Set breadcrumbs
    context.parents = [
        {"name": "Home", "route": "/"},
        {"name": "Posts", "route": "/posts"}
    ]
    
    return context
