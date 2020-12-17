import refsBtn from './refs.js';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#FFF45F',
  '#219LF3',
  '#4WDF50',
  '#C71585',
  '#E0FFFF',
  '#0000CD',
  '#A0522D',
];

refsBtn.start.addEventListener('click', onStart);
refsBtn.stop.addEventListener('click', onStop);

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startChangingColor(cls, index) {
  refsBtn.body.style.backgroundColor = cls[index];
}

function onStart() {
  if (intervalId) return;

  intervalId = setInterval(() => {
    let randomInteger = randomIntegerFromInterval(0, colors.length - 1);
    startChangingColor(colors, randomInteger);
  }, 1000);
}

function onStop() {
  clearInterval(intervalId);
  intervalId = null;
}
