module.exports = function() {
  var menuToggle = document.querySelector("#menu-toggler");
  var html = document.querySelector("html");
  var menuContent = document.querySelector(".nav__content");
  var navBar = document.querySelector(".navbar");
  var menuToggleIcon = menuToggle.children;

  document.addEventListener("DOMContentLoaded", () => {
    html.classList.toggle("js");
  });

  menuToggle.addEventListener("click", function() {
    menuContent.classList.toggle("show");
    if (menuContent.classList.contains("show")) {
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggleIcon.item(0).innerHTML = "Close";
      menuToggleIcon.item(1).classList.replace("fa-bars", "fa-window-close");
    } else {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggleIcon.item(0).innerHTML = "Menu";
      menuToggleIcon.item(1).classList.replace("fa-window-close", "fa-bars");
    }
  });
};
