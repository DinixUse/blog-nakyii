document.addEventListener('DOMContentLoaded', function() {
    // Get background configuration
    const backgroundUrl = window.blogBackgroundUrl;
    const pageBackgroundOpacity = window.pageBackgroundOpacity || 1.0;
    const sidebarBackgroundOpacity = window.sidebarBackgroundOpacity || 0.95;
    
    // Apply page background
    if (backgroundUrl) {
        // Set background image for both html and body
        document.documentElement.style.backgroundImage = `url(${backgroundUrl})`;
        document.body.style.backgroundImage = `url(${backgroundUrl})`;
        
        // Set background opacity
        document.documentElement.style.backgroundColor = `rgba(0, 0, 0, ${1 - pageBackgroundOpacity})`;
        document.body.style.backgroundColor = `rgba(0, 0, 0, ${1 - pageBackgroundOpacity})`;
        
        // Ensure the background covers the entire page
        document.documentElement.style.backgroundSize = 'cover';
        document.documentElement.style.backgroundPosition = 'center';
        document.documentElement.style.backgroundRepeat = 'no-repeat';
        document.documentElement.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
    }
    
    // Apply sidebar background opacity
    const sidebar = document.querySelector('#sidebar');
    if (sidebar) {
        sidebar.style.backgroundColor = `rgba(255, 255, 255, ${sidebarBackgroundOpacity})`;
    }
});