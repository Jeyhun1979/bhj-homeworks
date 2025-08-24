const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', (event) => {
        const submenu = menuLink.nextElementSibling;
        if (submenu && submenu.classList.contains('menu_sub')) {
            event.preventDefault();
            document.querySelectorAll('.menu_sub').forEach(sub => {
                sub.classList.remove('menu_active');
            });
            submenu.classList.toggle('menu_active');
        }
    });
});