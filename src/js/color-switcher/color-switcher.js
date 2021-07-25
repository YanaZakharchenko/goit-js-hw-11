import '../../sass/color-switcher.scss';

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

stopButton.disabled = true;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeBodyBgColor = () => {
  console.log('changeBodyBgColor');

  document.body.style.backgroundColor = getRandomHexColor();
};

let intervalId = null;

const startInterval = () => {
  console.log('startInterval');

  startButton.disabled = true;
  stopButton.disabled = false;

  intervalId = setInterval(changeBodyBgColor, 1000);
};

const stopInterval = () => {
  console.log('stopInterval');

  clearInterval(intervalId);

  stopButton.disabled = true;
  startButton.disabled = false;
};

startButton.addEventListener('click', startInterval);
stopButton.addEventListener('click', stopInterval);
