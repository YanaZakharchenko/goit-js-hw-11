const body = document.querySelector('body');
const start = document.querySelector('button[data-action ="start"]');
const stop = document.querySelector('button[data-action="stop"]');

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const bodyColor = function () {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(body.style.backgroundColor);
};

let timerId = null;

start.addEventListener('click', changeColor);
stop.addEventListener('click', stoppedChangeColor);

function changeColor() {
  timerId = setInterval(bodyColor, 1000);
  start.removeEventListener('click', changeColor);
}

function stoppedChangeColor() {
  body.style.backgroundColor = '';
  clearInterval(timerId);
  start.addEventListener('click', changeColor);
}
