
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById('menu');
    const sideBar = document.getElementById('side-bar');
    const sideBarExpanded = document.getElementById('sb-expanded');

    const openMenu = (event) => {
        if (sideBar.style.display === "none") {
            sideBar.style.display = "inline-block";
            sideBarExpanded.style.display = "none";
        } else {
            sideBar.style.display = "none";
            sideBarExpanded.style.display = "inline-block";
        }
    };

    menuButton.addEventListener('click', openMenu);
});
