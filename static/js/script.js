const menuToggle = document.querySelector('#menu-toggler');
const html = document.querySelector('html');
const menuContent = document.querySelector('.nav__content');
const navBar = document.querySelector('.navbar');
const menuToggleIcon = menuToggle.children;

document.addEventListener('DOMContentLoaded', () => {
    html.classList.toggle('js');
});

menuToggle.addEventListener('click', () => {
   menuContent.classList.toggle('show'); 
   if (menuContent.classList.contains('show')) {
       menuToggleIcon.item(0).innerHTML = 'Close';
       menuToggleIcon.item(1).classList.replace('fa-bars', 'fa-window-close');
   } else {
       menuToggleIcon.item(0).innerHTML = 'Menu';
       menuToggleIcon.item(1).classList.replace('fa-window-close', 'fa-bars');
   }
});

formCheckbox = document.querySelector('#terms');
formSubmit = document.querySelector('#submit');

formCheckbox.onchange = function() {
    formSubmit.disabled = !this.checked;
};
