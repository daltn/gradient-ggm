const arrow = document.querySelector('#mc-embedded-subscribe');
const email = document.querySelector('#mce-EMAIL');
const gradient = document.querySelector('#gradient');

arrow.addEventListener('click', function(e) {
  e.preventDefault();
  gradient.style.opacity = 0;
  arrow.style.opacity = 0;
  email.style.opacity = 0;
  email.style.color = '#ffffff';
  email.value = 'COMING SOON';
  setTimeout(() => {
    email.style.opacity = 1;
  }, 1000);
});
