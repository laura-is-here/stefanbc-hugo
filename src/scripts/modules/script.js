  let menuToggle = document.querySelector("#menu-toggler");
  let html = document.querySelector("html");
  let menuContent = document.querySelector(".nav__content");
  let menuToggleIcon = menuToggle.children;

  document.addEventListener("DOMContentLoaded", () => {
    html.classList.toggle("js");
  });

  menuToggle.addEventListener("click", function () {
    menuContent.classList.toggle("hidden");
    if (menuContent.classList.contains("hidden")) {
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggleIcon.item(0).innerHTML = "Close";
      menuToggleIcon.item(1).classList.replace("fa-bars", "fa-window-close");
    } else {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggleIcon.item(0).innerHTML = "Menu";
      menuToggleIcon.item(1).classList.replace("fa-window-close", "fa-bars");
    }
  });
