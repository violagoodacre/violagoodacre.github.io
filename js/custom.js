document.addEventListener('DOMContentLoaded', function() {
    // Sidebar Toggle
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    if (sidebarCollapse) {
        sidebarCollapse.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('active');
            body.classList.toggle('sidebar-active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const windowWidth = window.innerWidth;
        if (windowWidth < 992) {
            if (!sidebar.contains(event.target) && !sidebarCollapse.contains(event.target) &&
                sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                body.classList.remove('sidebar-active');
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            // Remove active classes on large screens
            body.classList.remove('sidebar-active');
        }
    });

    // handle sidebar nav links
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function () {
            if(this.classList.contains('nav-link-external')) {
                return;
            }
            document.querySelectorAll('.sidebar-nav .nav-link').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
