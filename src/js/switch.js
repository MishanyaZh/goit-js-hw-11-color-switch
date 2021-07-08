
//Есть массив цветов в hex-формате и кнопки Start и Stop.
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBodyColor() {
    const min = 0;
    const max = colors.length - 1;
    const colorChange = randomIntegerFromInterval(min, max);
    document.body.style.backgroundColor = `${colors[colorChange]}`;
}


startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
// bodyRef.addEventListener('click', onClick);

let interval = null;
let isActive = false;

function start(evt) {
    
    if (isActive) {
        return;
    }

    isActive = true;
    startBtn.disabled = true;
    interval = setInterval(changeBodyColor, 1000);
  
}

function stop(evt) {
   
    clearInterval(interval);
    
    // interval = null;
    isActive = false;

    startBtn.disabled = false;
}

// function onClick(evt) {
//     let startActiv = evt.target.dataset.action;
//     if (startActiv === 'start') {
//         start();
//         return;
//     }
//     stop();
// }



//// ------------- 2 ---------------

// function start() {
  
//     startBtn.disabled = true;
//     interval = setInterval(changeBodyColor, 1000);  
// }

// function stop() {

//     clearInterval(interval);
//     startBtn.disabled = false;
// }


// function onClick(evt) {
//     let startActiv = evt.target.dataset.action;
//     if (startActiv === 'start') {
//         start();
//         return;
//     }
//     stop();
// }


/// -------------3 ---------------
// const refs = {
//   btnStart: document.querySelector('button[data-action="start"]'),
//   btnStop: document.querySelector('button[data-action="stop"]'),
//   body: document.querySelector('body'),
// };
// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// let intervalId = null;
// refs.body.addEventListener('click', onClick);

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const setBodyColor = () => {
//   const idx = randomIntegerFromInterval(0, 5);
//   refs.body.style.backgroundColor = `${colors[idx]}`;
// };

// function start() {
//   refs.btnStart.disabled = true;
//   intervalId = setInterval(setBodyColor, 1000);
// }

// function stop() {
//   clearInterval(intervalId);
//   refs.btnStart.disabled = false;
// }

// function onClick(evt) {
//   let action = evt.target.dataset.action;
//   if (action === 'start') {
//     start();
//     return;
//   }
//   stop();
// }


// // 4------


// // Массив цветов
// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// // Кнопки в DOM
// const startBtnRef = document.querySelector('[data-action="start"]');
// const stopBtnRef = document.querySelector('[data-action="stop"]');

// // Обьект с методами
// const changer = {
//   intervalID: null,
//   isActive: false,

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     this.isActive = true;

//     startBtnRef.disabled = true;

//     this.intervalID = setInterval(() => {
//       updateBody();
//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalID);

//     this.intervalID = null;
//     this.isActive = false;

//     startBtnRef.disabled = false;
//   },
// };

// // Слушатели событий на кнопках
// startBtnRef.addEventListener('click', changer.start.bind(changer));
// stopBtnRef.addEventListener('click', changer.stop.bind(changer));

// // Генерирует случайный цвет
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// // Обновляет цвет фона случайным цветом
// function updateBody() {
//   const randomColor = randomIntegerFromInterval(0, colors.length - 1);
//   document.body.style.backgroundColor = colors[randomColor];
// }