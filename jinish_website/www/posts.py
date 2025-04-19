import frappe

def get_context(context):
    # Get all published blog posts
    context.blogs = frappe.get_all('Blog Post', 
                                  fields=['name', 'title', 'blog_intro', 'published', 'creation', 'modified', 'blogger', 'blog_category', 'route', 'meta_image'], 
                                  filters={'published': 1}, 
                                  order_by='creation desc')
    
    # Set meta tags
    context.metatags = {
        "title": "Blog | Jinish Website",
        "description": "Explore our latest articles and insights"
    }
    
    # Set breadcrumbs
    context.parents = [
        {"name": "Home", "route": "/"}
    ]
    
    return context
