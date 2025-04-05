const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the icon class
    navbar.classList.toggle('active'); // Toggle the 'active' class on the navbar
});