// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or use default light theme
    const savedTheme = localStorage.getItem('jinish-theme') || 'light';
    
    // Apply the theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update toggle button state
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.checked = savedTheme === 'dark';
    }
    
    // Add event listener to toggle button
    document.body.addEventListener('click', function(e) {
        if (e.target.id === 'theme-toggle' || e.target.closest('.theme-toggle-wrapper')) {
            toggleTheme();
        }
    });
});

function toggleTheme() {
    // Get current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Toggle theme
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update theme attribute
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save preference to localStorage
    localStorage.setItem('jinish-theme', newTheme);
    
    // Update toggle button state
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.checked = newTheme === 'dark';
    }
}
