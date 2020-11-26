'use strict';

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');

const newTime = new Date(`December 1 2020 19:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
}

setInterval(updateCountdown, 1000);

const slider = document.querySelectorAll('.slider__item');
const points = document.querySelectorAll('.slider__point');
const list = document.querySelector('.slider__points');

list.addEventListener('click', event => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  for (let i = 0; i < points.length; i++) {
    if (event.target === points[i]) {
      slider[i].classList.add('slider__item--block');
      points[i].classList.add('slider__point--block');
    } else {
      slider[i].classList.remove('slider__item--block');
      points[i].classList.remove('slider__point--block');
    }
  }
});
