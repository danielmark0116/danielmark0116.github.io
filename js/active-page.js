'use strict';

var path = window.location.href;
var links = document.querySelectorAll('.nav-link');

links.forEach(x => {
  if (x.href === path) {
    x.classList.add('active');
  }
});
