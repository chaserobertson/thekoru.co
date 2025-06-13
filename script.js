// Content templates
const templates = {
    '': `
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>koru&co.</h1>
                <p>Handcrafted Passionfruit Ice Cream</p>
                <a href="#order" class="cta-button">get some for yourself</a>
                <br/>
                <a href="#info" class="cta-button">how you'll get your order</a>
                <a href="#contact" class="cta-button">get in touch with us</a>
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
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd2YrCTdg_MI1bJRRofYz76m4fJmcDQuOGFdwhdXytPIU96eA/viewform?embedded=true">
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    `,

    'info': `
        <div class="container">
            <div class="info-container">
                <h1>HOW THIS WORKS</h1>
                <div>
                    <ol>
                        <li>
                            <b>Place your order</b><br/>
                            All orders must be submitted through our website. 
                            Limited quantities are available, so act quickly! 
                            You don't want to miss out.
                        </li>
                        <li>
                            <b>Wait for a pickup text</b><br/>
                            Once your order is ready, we'll send you a text with the available pickup dates & time frame.
                            The pickup location is our home in South San Clemente - specifics will be included in your pickup text.
                            Please make sure your contact info is correct!
                        </li>
                        <li>
                            <b>Pick up at your convenience</b><br/>
                            Come by during the pickup window listed in our message to you - no need to schedule a specific time.
                        </li>
                    </ol>
                    <p><i>
                        Pickups are usually available Friday-Sunday, 12pm-4pm. (subject to change)
                    </i></p>
                </div>
                <h1>TIPS</h1>
                <ul>
                    <li>
                        <b>Storage & Serving</b><br/>
                        Keep your ice cream frozen until <b>just before</b> you're ready to indulge.
                        For the best texture & flavour, let it rest at room temperature for about <b>10 minutes</b> before digging in.
                        Trust us - it's worth the wait!
                    </li>
                    <li>
                        <b>Refreezing Tip</b><br/>
                        If you don't finish the pint, you can refreeze it.
                        Just try to prevent it from fully melting, as that can change the texture.
                    </li>
                </ul>
            </div>
        </div>
    `,

    'contact': `
        <div class="container">
            <div class="contact-container">
                <h1>GET IN TOUCH</h1>
                <h3>Email: <a href="mailto:thekoru.co@gmail.com">thekoru.co@gmail.com</a></h3>
                <p>
                    Please direct special order requests and other inquiries here.
                    It may take a day or two, but we'll get back to you as soon as we can!
                </p>
                <div class="contact-form">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd1JFasOaVq-9IPWx_Fcx-nfVhjUrBBC3QUWudsh1TTpCBQDw/viewform?embedded=true">
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    `,
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
