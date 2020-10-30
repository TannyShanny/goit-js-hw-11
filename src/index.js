document.addEventListener("DOMContentLoaded", () => {
  const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];

  const refs = {
    startButton: document.querySelector('button[data-action="start"]'),
    stopButton: document.querySelector('button[data-action="stop"]'),
    colorBody: document.querySelector("body"),
  };

  let colorId = null;

  const startChangingColors = () => {
    colorId = setInterval(() => {
      let changeColors = randomIntegerFromInterval(0, colors.length);
      refs.colorBody.style.background = colors[changeColors];
    }, 1000);
    refs.startButton.disabled = true;
  };

  const stopChangingColors = () => {
    clearInterval(colorId);
    refs.startButton.disabled = false;
  };

  refs.startButton.addEventListener("click", startChangingColors);
  refs.stopButton.addEventListener("click", stopChangingColors);

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
});
