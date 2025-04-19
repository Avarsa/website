import frappe

def get_context(context):
    context.title = "Jinish Chandrababu | Software Architect"
    context.description = "Building intelligent systems at the intersection of software architecture and AI"
    
    # Add meta tags for better SEO and social sharing
    context.meta_image = "/assets/jinish_website/images/meta-image.jpg"
    
    # Core expertise areas - more focused and technical
    context.expertise = [
        {
            "name": "Software Architecture",
            "icon": "ti ti-binary",
            "description": "Designing complex systems with mathematical precision and elegant simplicity.",
            "tags": ["System Design", "Distributed Systems", "Scalability Patterns"]
        },
        {
            "name": "AI Engineering",
            "icon": "ti ti-brain",
            "description": "Implementing neural architectures and ML pipelines for real-world applications.",
            "tags": ["Deep Learning", "NLP", "Computer Vision"]
        },
        {
            "name": "Frappe Framework",
            "icon": "ti ti-code",
            "description": "Crafting enterprise solutions with Frappe's powerful low-code architecture.",
            "tags": ["Python", "JavaScript", "ERPNext"]
        }
    ]
    
    # Featured projects - more technical descriptions
    context.projects = [
        {
            "title": "ArchVerity",
            "image": "/assets/jinish_website/images/project-1.jpg",
            "description": "Computer vision system for automated architectural plan validation using neural networks",
            "tech": "Python, TensorFlow, Frappe"
        },
        {
            "title": "Neural ERP",
            "image": "/assets/jinish_website/images/project-2.jpg",
            "description": "AI-augmented enterprise system with predictive analytics and natural language interfaces",
            "tech": "Frappe, PyTorch, React"
        }
    ]
    
    # Technical principles - more value-focused
    context.principles = [
        {
            "title": "Algorithmic Thinking",
            "icon": "ti ti-circuit",
            "description": "Approaching problems with mathematical rigor and computational efficiency."
        },
        {
            "title": "Intelligent Automation",
            "icon": "ti ti-robot",
            "description": "Creating systems that learn, adapt, and evolve to deliver continuous value."
        },
        {
            "title": "Elegant Simplicity",
            "icon": "ti ti-infinity",
            "description": "Finding the minimal, most powerful solution through iterative refinement."
        }
    ]
    
    return context
