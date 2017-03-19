(function () {
  "use strict";
  // Mobile menu
  var burgerButton = document.querySelector(".top-menu__burger");
  var modalMenu = document.querySelector(".modal-menu");
  var userBlock = document.querySelector(".user-block");

  initMenuState();

  handleMenu();

  function toggleMenu() {
    burgerButton.classList.toggle("top-menu__burger--close");
    modalMenu.classList.toggle("modal-menu--closed");
    userBlock.classList.toggle("user-block--closed");
  }

  function handleMenu() {
    burgerButton.addEventListener("click", function (ev) {
      ev.preventDefault();
      toggleMenu();
    });
  }

  function initMenuState() {
    toggleMenu();
  }

})();
