const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = (seconds) => {

  if (seconds > 0){
  const interval = setInterval(() => {

    seconds--;
    let second = seconds % 60;
    let minut = Math.floor(seconds / 60) % 60;
    let hour = Math.floor(seconds / 60 /60);
    
    if(minut <= 9) minut = "0" + minut;
    if(second <= 9) second = "0" + second;
    if(hour <= 9) hour = "0" + hour;
    
    timerEl.innerHTML = hour + ":" + minut + ":" + second; 

      if (seconds === 0) {
        clearInterval(interval);
    }
  }, 1000);
  }

    return (seconds) => {};
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const isAlpha = /^[0-9]+$/i.test(inputEl.value)
  if (isAlpha == true){
    console.log('все оки')
  } else inputEl.value = '';
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  createTimerAnimator(seconds);

  console.log(inputEl.value);

  inputEl.value = '';
});