let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 100;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;

  if (progressValue <= 10) {
    progressBar.style.background = `conic-gradient(
    
      #fc1303 ${progressValue * 3.6}deg,
       #FFA30E ${progressValue * 3.6}deg
  )`;
  } else if (progressValue > 10 && progressValue <= 30) {
    progressBar.style.background = `conic-gradient(
    
      #fc5e03 ${progressValue * 3.6}deg,
      #FFA30E ${progressValue * 3.6}deg
  )`;
  } else if (progressValue > 30 && progressValue <= 60) {
    progressBar.style.background = `conic-gradient(
    
      #fcd703 ${progressValue * 3.6}deg,
       #FFA30E ${progressValue * 3.6}deg
  )`;
  } else if (progressValue > 60 && progressValue <= 90) {
    progressBar.style.background = `conic-gradient(
    
      #b6fc03 ${progressValue * 3.6}deg,
     #FFA30E ${progressValue * 3.6}deg
  )`;
  } else if (progressValue > 90 && progressValue <= 100) {
    progressBar.style.background = `conic-gradient(
    
      #189E5E ${progressValue * 3.6}deg,
       #FFA30E ${progressValue * 3.6}deg
  )`;
  }

  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
