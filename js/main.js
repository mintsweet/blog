window.onload = function () {
  const main = document.getElementById('main');
  const mobileNavbar = document.getElementById('mobileNavbar');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuBar = document.getElementById('menuBar');

  menuBar.addEventListener('click', function() {
    main.classList.toggle('slide-left');
    mobileNavbar.classList.toggle('slide-left');
    mobileMenu.classList.toggle('open');
    menuBar.classList.toggle('open');
  });
}