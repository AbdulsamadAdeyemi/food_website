const menuItems = document.getElementById("menu_items");
const menuButton = document.getElementById("bars");

if (menuItems && menuButton) {
    menuButton.addEventListener("click", () => {
        const isOpen = menuItems.classList.toggle("show");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    menuItems.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            menuItems.classList.remove("show");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation");
        }
    });
}