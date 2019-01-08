const arrow = document.querySelector('#mc-embedded-subscribe');
const email = document.querySelector('#mce-EMAIL');
const gradient = document.querySelector('#gradient');
const form = document.querySelector('#mc-embedded-subscribe-form');

window.setTimeout(() => {
  email.style.opacity = 1;
}, 1500);

const showArrow = () => {
  arrow.style.opacity = 1;
};

arrow.addEventListener('click', function(e) {
  e.preventDefault();
  arrow.style.opacity = 0;
  email.style.opacity = 0;
  const parent = document.querySelector('#mc_embed_signup');
  const soon = document.createElement('h2');
  window.setTimeout(() => {
    gradient.style.opacity = 0;
  }, 2000);
  window.setTimeout(() => {
    parent.removeChild(form);
    const textNode = document.createTextNode('COMING SOON');
    soon.appendChild(textNode);
    parent.appendChild(soon);
  }, 4000);
  window.setTimeout(() => {
    soon.style.opacity = 1;
  }, 6000);
  window.setTimeout(() => {
    soon.style.opacity = 0;
  }, 11000);
});
