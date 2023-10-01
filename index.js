// Get the canvas element and its 2D context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let step = 100;
let stepl = 10;
let x1, y1 = 0;
let x2 = canvas.width/2;
let y2 = canvas.height/2;



function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}



function drawLine(x1, y1, x2, y2) {
  ctx.strokeStyle = '#000000'; // Set line color
  ctx.beginPath(); // Begin drawing path
  ctx.moveTo(x1, y1); // Move to the starting point
  ctx.lineTo(x2, y2); // Draw a line to the ending point
  ctx.stroke(); // Stroke the line with the walker's color
}


function takeStep(){
    x1 = x2;
    y1 = y2;
    
    let randomNumber = Math.floor(Math.random() * 4);

    if (randomNumber == 0 ) {
        x2 -= stepl;
    }  //goes left if random number is 0. 
    
    else if (randomNumber == 1) {
        y2 -= stepl;
       
    } //goes up if random number is 1. 
    
    else if (randomNumber == 2 ) {
        y2 += stepl;
    }//goes down if random number is 2.

    else if (randomNumber == 3){
        x2 += stepl;
    }  //goes right if random number is 3.

    drawLine(x1, y1, x2, y2);
}

function startDrawing(){
    clearCanvas();
    for(let i = 0; i < step; i++){
        setTimeout(takeStep, 10*i);
    }
    x1, y1 = 0;
    x2 = canvas.width/2;
    y2 = canvas.height/2;
}

const startButton = document.getElementById("start-button")
startButton.addEventListener('click', startDrawing);








