const arrow = document.querySelector('#mc-embedded-subscribe');
const email = document.querySelector('#mce-EMAIL');
const gradient = document.querySelector('#gradient');

setTimeout(() => {
  email.style.opacity = 1;
}, 1500);

const showArrow = () => {
  arrow.style.opacity = 1;
};

arrow.addEventListener('click', function(e) {
  e.preventDefault();
  arrow.style.opacity = 0;
  email.style.opacity = 0;
  setTimeout(() => {
    email.style.color = '#ffffff';
    email.value = 'COMING SOON';
    email.style.opacity = 1;
  }, 2000);
  setTimeout(() => {
    gradient.style.opacity = 0;
  }, 4000);
});
