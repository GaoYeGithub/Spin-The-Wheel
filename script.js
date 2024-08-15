let options = ["Iron Man", "7500", "Bat Man", "Joker", "Shoplifters", "Inception", "Deadpool", "Terminator"];

function spinFunction() {
  const box = document.getElementById('box');
  const anglePerOption = 360 / options.length;

  var x = 1024;
  var y = 9999;
  var deg = Math.floor(Math.random() * (y - x)) + x;

  box.style.transform = "rotate(" + deg + "deg)";

  var element = document.getElementById('mainbox');
  element.classList.remove('animate');

  setTimeout(function() {
    element.classList.add('animate');
    displayResult(deg);
  }, 5000);
}

function addOption() {
  const newOption = document.getElementById("newOption").value;
  if (newOption) {
    options.push(newOption);
    updateWheel();
  }
}

function updateWheel() {
  const box = document.getElementById('box');
  box.innerHTML = '';
  const anglePerOption = 360 / options.length;

  options.forEach((option, index) => {
    const span = document.createElement("span");
    const rotateAngle = anglePerOption * index;
    span.style.transform = `rotate(${rotateAngle}deg)`;
    span.style.clipPath = `polygon(50% 50%, 100% 0%, 100% 100%)`;
    span.style.backgroundColor = getRandomColor();
    span.innerHTML = `<b>${option}</b>`;
    box.appendChild(span);
  });
}

function displayResult(deg) {
  const anglePerOption = 360 / options.length;
  const normalizedDeg = (deg % 360) + anglePerOption / 2;
  const optionIndex = Math.floor((normalizedDeg % 360) / anglePerOption);

  const resultElement = document.getElementById('movieName');
  resultElement.textContent = options[optionIndex];
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

updateWheel();
