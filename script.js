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
                <br/>
                <a href="#contact" class="cta-button">leave a review</a>
            </div>
        </section>
    `,

    'order': `
        <div class="container">
            <div class="order-container">
                <div class="order-form">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd2YrCTdg_MI1bJRRofYz76m4fJmcDQuOGFdwhdXytPIU96eA/viewform?embedded=true">
                        Loading…
                    </iframe>
                </div>
                <div class="order-image">
                    <img src="assets/spiralB&W.jpg" alt="koru&co. logo">
                    <div class="reviews-container">
                        <div class="review">
                            <div class="review-stars">★★★★★</div>
                            <p class="review-text">
                                "A smooth, creamy and refreshingly tangy treat- made with REAL homegrown passion fruit and a whole lot of love!
                                You can literally taste the PASSION (pun intended) that shows in each bite!
                                My new favorite dessert that I've been missing out on my whole life-but not anymore! Yum!"
                            </p>
                            <p class="review-author">- Willow</p>
                        </div>
                        <div class="review">
                            <div class="review-stars">★★★★★</div>
                            <p class="review-text">
                                "I am blown away by their homemade passion fruit ice cream.
                                It’s creamy, tangy, and perfectly balanced with just the right amount of sweetness
                                You can tell everything is made with care, and the passion fruit flavor truly stands out as something special.
                                It’s not every day you find a flavor this tropical and refreshing done so well.
                                Don’t miss this! I’ll be ordering over and over again!"
                            </p>
                            <p class="review-author">- James T.</p>
                        </div>
                    </div>
                    <div class="order-review">
                        <a href="#contact" class="cta-button">leave a review</a>
                    </div>
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
                <h1>PAYMENT</h1>
                <div>
                    <ul>
                        <li>
                            <b>$10 per pint</b><br/>
                            $10 flat! Easy peasy. 
                        </li>
                        <li>
                            <b>Cash or Venmo</b><br/>
                            We'll accept either cash or Venmo at pickup.
                            If you're going the cash route, exact change is appreciated.
                        </li>
                    </ul>
                </div>
                <h1>PRO TIPS</h1>
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
                <h1>LEAVE A REVIEW</h1>
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
