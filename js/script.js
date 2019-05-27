'use strics';

const btn = document.querySelector('#nav-icon3');
const togglerBtn = document.querySelector('#toggler-btn');

togglerBtn.addEventListener('click', () => {
  btn.classList.toggle('open');
});
