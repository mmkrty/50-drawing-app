const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorEl = document.getElementById('color');
const sizeEl = document.getElementById('size');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const eraseBtn = document.getElementById('erase');

let isPressed = false;
let size = 10;
let color = 'black';
let x;
let y;


//drawing functions
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        //set x and y to current position
        x = x2;
        y = y2;
    }
})

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

 // drawCircle(100, 200);

function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke();
}

 // drawLine(100, 100, 100, 400);




//toolbox functions
increaseBtn.addEventListener('click', () => {
  if(size < 50){
      size++;
  } else {
      size = 50;
  }

  sizeEl.innerHTML = size;
})

decreaseBtn.addEventListener('click', () => {
    if(size > 10){
        size--;
    } else {
        size = 10;
    }

    sizeEl.innerHTML = size;
})

colorEl.addEventListener('input', () => {
    color = colorEl.value;
})

eraseBtn.addEventListener('click', ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})





