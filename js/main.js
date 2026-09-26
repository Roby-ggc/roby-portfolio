// =====================================================
// ROBY PORTFOLIO — MAIN JAVASCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------------------------
    // ELEMENTS
    // -------------------------------------------------

    const menuButton = document.querySelector(".mobile-menu-button");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav a");


    // -------------------------------------------------
    // MOBILE MENU
    // -------------------------------------------------

    if (menuButton && mobileNav) {

        menuButton.addEventListener("click", () => {

            const isOpen = mobileNav.classList.toggle("is-open");

            menuButton.classList.toggle("is-active", isOpen);

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        });


        // -------------------------------------------------
        // CLOSE MENU WHEN CLICKING A LINK
        // -------------------------------------------------

        mobileNavLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("is-open");

                menuButton.classList.remove("is-active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                document.body.classList.remove("menu-open");

            });

        });

    }


    // -------------------------------------------------
    // SMOOTH SCROLL
    // -------------------------------------------------

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});