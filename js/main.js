window.onload = function () {
  const btn = document.querySelector('.menu-controller');
  const body = document.body;

  btn.addEventListener('click', function() {
    btn.classList.toggle('active');
    body.classList.toggle('offset');
  });
}