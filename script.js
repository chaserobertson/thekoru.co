document.addEventListener('DOMContentLoaded', function() {
    // Show the requested page based on URL hash
    function showPage(page) {
        // Hide all pages first
        document.querySelectorAll('.page-content').forEach(section => {
            section.style.display = 'none';
        });
        
        // Show the requested page (default to 'hero' if empty)
        const pageToShow = document.getElementById(page || 'hero');
        if (pageToShow) {
            pageToShow.style.display = 'block';
        }

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            const linkPage = link.getAttribute('data-page') || '';
            if (linkPage === page) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Add smooth scroll to top when changing pages
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    // Handle navigation link clicks
    function handleNavigation(event) {
        if (event.target.closest('.nav-link')) {
            event.preventDefault();
            const page = event.target.closest('.nav-link').getAttribute('data-page') || '';
            window.location.hash = page ? `#${page}` : '#';
            showPage(page);
        }
    }


    // Handle browser back/forward buttons
    function handleHashChange() {
        const page = window.location.hash.substring(1);
        showPage(page);
    }

    // Initialize the page
    function init() {
        // Show the page based on the current URL hash
        const page = window.location.hash.substring(1);
        showPage(page);
        
        // Set up event listeners
        document.addEventListener('click', handleNavigation);
        window.addEventListener('hashchange', handleHashChange);
    }

    // Start the application
    init();
});
