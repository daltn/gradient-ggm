const arrow = document.getElementById('mc-embedded-subscribe');
const email = document.getElementById('mce-EMAIL');
const gradient = document.getElementById('gradient');

arrow.addEventListener('click', function(e) {
  e.preventDefault();
  gradient.style.opacity = 0;
});
