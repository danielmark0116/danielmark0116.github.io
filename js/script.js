'use strics';

const btn = document.querySelector('#customBtn');

btn.addEventListener('click', () => {
  btn.classList.toggle('is-active');
});
