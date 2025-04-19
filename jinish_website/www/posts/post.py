import frappe

def get_context(context):
    # Get the route from the URL
    route = frappe.request.path[7:]  # Remove '/posts/' from the path
    
    if not route:
        frappe.local.flags.redirect_location = '/posts'
        raise frappe.Redirect
    
    # Try to fetch the blog post by route or name
    try:
        # First try by route
        blog_posts = frappe.get_all('Blog Post', 
                                   filters={'route': route, 'published': 1},
                                   fields=['name'])
        
        if blog_posts:
            blog_post = frappe.get_doc('Blog Post', blog_posts[0].name)
        else:
            # If not found by route, try by name
            blog_post = frappe.get_doc('Blog Post', route)
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
        {"name": "Post", "route": "/posts"}
    ]
    
    return context
