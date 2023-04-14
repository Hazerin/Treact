function openMenu() {
    document.querySelector('.hamburger__menu').classList += " menu--open";
}

function closeMenu() {
    document.querySelector('.hamburger__menu').classList.remove('menu--open');
} 