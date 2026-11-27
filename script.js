
// =====================================
// GUJARAT FESTIVAL TRACKER
// MAIN JAVASCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // Sidebar navigation
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            // Remove active class from all links
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            // Activate clicked link
            link.classList.add("active");

        });

    });

    // Welcome section animation
    const welcomeSection = document.querySelector(".welcome-section");

    if (welcomeSection) {
        welcomeSection.classList.add("loaded");
    }

    console.log("Gujarat Festival Tracker is ready!");

});
