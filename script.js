const arrow = document.querySelector('#mc-embedded-subscribe');
const email = document.querySelector('#mce-EMAIL');
const gradient = document.querySelector('#gradient');
const form = document.querySelector('#mc-embedded-subscribe-form');
const ggm = document.querySelector('#ggm-left');
const ss19 = document.querySelector('#ss19-right');

const initLoad = () => {
  window.setTimeout(() => {
    ss19.style.opacity = 1;
    ggm.style.opacity = 1;
  }, 200);
  window.setTimeout(() => {
    email.style.opacity = 1;
  }, 800);
};

const showArrow = () => {
  email.placeholder = '';
  arrow.style.opacity = 1;
};

const blendGradient = () => {
  arrow.style.opacity = 0;
  email.style.opacity = 0;
  const parent = document.querySelector('#mc_embed_signup');
  const soon = document.createElement('h3');
  window.setTimeout(() => {
    gradient.style.opacity = 0;
  }, 500);
  window.setTimeout(() => {
    parent.removeChild(form);
    const textNode = document.createTextNode('COMING SOON');
    soon.appendChild(textNode);
    parent.appendChild(soon);
  }, 3000);
  window.setTimeout(() => {
    soon.style.opacity = 1;
  }, 7000);
};
