var menuToggle = document.querySelector('#menu-toggler');
var html = document.querySelector('html');
var menuContent = document.querySelector('.nav__content');
var navBar = document.querySelector('.navbar');
var menuToggleIcon = menuToggle.children;

document.addEventListener('DOMContentLoaded', () => {
    html.classList.toggle('js');
});

menuToggle.addEventListener('click', function() {
    menuContent.classList.toggle('show'); 
    if (menuContent.classList.contains('show')) {
        menuToggleIcon.item(0).innerHTML = 'Close';
        menuToggleIcon.item(1).classList.replace('fa-bars', 'fa-window-close');
    } else {
        menuToggleIcon.item(0).innerHTML = 'Menu';
        menuToggleIcon.item(1).classList.replace('fa-window-close', 'fa-bars');
    }
});

/*
var formCheckbox = document.querySelector('#terms');
var formSubmit = document.querySelector('#submit');

if (formCheckbox) {
    formCheckbox.onchange = function() {
        formSubmit.disabled = !this.checked;
    }
};
*/