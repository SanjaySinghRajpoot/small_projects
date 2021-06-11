const canvas = document.getElementById("canvas");
const increasebtn = document.getElementById("increase");
const decreasebtn = document.getElementById("decrease");
const sizeEle = document.getElementById("size");
const colorsIn = document.getElementById("color");
const clearbtn = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 20;
let isPressed = false;
let color = "black";

let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;
});

clearbtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.height, canvas.width);
});

canvas.addEventListener("mousemove", (e) => {
  const x2 = e.offsetX;
  const y2 = e.offsetY;

  if (isPressed == true) {
    drawLine(x, y, x2, y2);
    drawCircle(x2, y2);
    x = x2;
    y = y2;
  }
});

increasebtn.addEventListener("click", () => {
  size = size + 5;
  updateSizeOnTheScreen();
});

decreasebtn.addEventListener("click", () => {
  size = size - 5;

  if (size < 0) {
    size = 0;
  }

  updateSizeOnTheScreen();
});

colorsIn.addEventListener("change", (e) => {
  color = e.target.value;
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnTheScreen() {
  sizeEle.innerText = size;
}

// drawCircle(200,200);

// function draw(){

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle(x, y);

//     requestAnimationFrame(draw);
// }

// draw();
