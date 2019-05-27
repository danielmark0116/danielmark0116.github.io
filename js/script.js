'use strics';

const btn = document.querySelector('#custom-btn');
const togglerBtn = document.querySelector('#toggler-btn');

togglerBtn.addEventListener('click', () => {
  btn.classList.toggle('active');
});
