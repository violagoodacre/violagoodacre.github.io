document.addEventListener('DOMContentLoaded', function() {
    // Handle navbar links active state
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Set active link based on scroll position
    function setActiveNavLink() {
        const scrollPosition = window.scrollY;

        // Get all sections
        const sections = document.querySelectorAll('section, header');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust for navbar height
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to corresponding link
                const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    // Initial call to set active link
    setActiveNavLink();

    // Set active link on scroll
    window.addEventListener('scroll', setActiveNavLink);

    // Close navbar collapse on link click on mobile
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // speed up tooltip hover, and hide it slowly
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(el => {
        new bootstrap.Tooltip(el, {
            delay: { show: 50, hide: 100 }
        });
    });
});


