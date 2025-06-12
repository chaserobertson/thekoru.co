// Content templates
const templates = {
    '': `
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>koru&co.</h1>
                <p>Handcrafted Passionfruit Ice Cream</p>
                <a href="#products" class="cta-button">Discover Our Ice Cream</a>
                <a href="#order" class="cta-button">Get Some</a>
            </div>
        </section>
    `,

    'products': `
        <div class="container">
            <div class="grid">
                <div class="product-card">
                    <div class="product-content">
                        <i class="fas fa-seedling fa-3x"></i>
                        <h3>Home-Grown Passionfruit</h3>
                        <p>Our signature flavor, made with fresh passionfruit harvested from our own backyard.</p>
                        <p class="price">$5.99</p>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-content">
                        <i class="fas fa-ice-cream fa-3x"></i>
                        <h3>Organic Range</h3>
                        <p>Truly organic passionfruit blended into smooth and delicious ice cream.</p>
                        <p class="price">$6.99</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- About Section -->
        <section id="about" class="about">
            <div class="container">
                <h2>made by us</h2>
                <div class="about-content">
                    <div class="about-text">
                        <p>
                            koru&co. is a local ice cream shop specializing in handcrafted passionfruit ice cream.
                            Using only the finest ingredients and traditional methods,
                            we create ice cream that brings the tropical flavors of passionfruit to every bite.
                        </p>
                        <p>
                            Visit us in-store to try our delicious creations and experience the passion behind our 
                            passionfruit ice cream.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `,

    'order': `
        <div class="container">
            <div class="order-container">
                <div class="order-image">
                    <img src="assets/spiralB&W.jpg" alt="koru&co. logo">
                </div>
                <div class="order-form">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd2YrCTdg_MI1bJRRofYz76m4fJmcDQuOGFdwhdXytPIU96eA/viewform?embedded=true"
                    width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0" loading="lazy">
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    `
};

document.addEventListener('DOMContentLoaded', function() {
    // Function to load content
    function loadContent(page) {
        const content = templates[page] || templates[''];
        document.getElementById('main-content').innerHTML = content;
        
        // Update active link
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            const linkPage = link.getAttribute('data-page') || '';
            if (linkPage === page) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Add event listeners to any new nav links in the content
        document.querySelectorAll('#main-content .nav-link').forEach(link => {
            link.addEventListener('click', handleNavigation);
        });
    }

    // Function to handle navigation
    function handleNavigation(event) {
        event.preventDefault();
        const link = event.target.closest('[data-page]');
        if (link) {
            const page = link.getAttribute('data-page') || '';
            // Update URL hash
            window.location.hash = page ? `#${page}` : '#';
            loadContent(page);
        }
    }

    // Handle hash change
    function handleHashChange() {
        const page = window.location.hash.substring(1);
        loadContent(page);
    }

    // Set up initial content
    function init() {
        const page = window.location.hash.substring(1);
        loadContent(page);
    }

    // Initialize the page
    init();

    // Add click event listeners to navigation links
    document.addEventListener('click', function(event) {
        if (event.target.closest('.nav-link')) {
            handleNavigation(event);
        }
    });

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', handleHashChange);
});
