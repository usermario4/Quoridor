let player1Name;
let player2Name;
let countdown;
let timer;
let selectedWallType = null; // Track the selected wall type ('horizontal' or 'vertical')
let selectedWallX = null; // Track the selected wall X position
let selectedWallY = null; // Track the selected wall Y position

class TheSquare {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.horizontalWall = false; // Track if the square has a horizontal wall
    this.verticalWall = false; // Track if the square has a vertical wall
  }

  draw() {
    fill(this.color);
    rect(this.x, this.y, 60, 50, 5);

    if (this.verticalWall) { // Draw horizontal wall if the square has a horizontal wall
      fill("#827839");
      rect(this.x, this.y + 50, 130, 10);
    }

    if (this.horizontalWall) { // Draw vertical wall if the square has a vertical wall
      fill("#827839");
      rect(this.x + 60, this.y, 10, 110);
    }
  }

  setColor(color) {
    this.color = color;
  }

  setHorizontalWall(hasWall) {
    this.horizontalWall = hasWall;
  }

  setVerticalWall(hasWall) {
    this.verticalWall = hasWall;
  }
}

class TheFrame {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    fill(this.color);
    rect(this.x, this.y, 90, 45, 10);
  }

  setColor(color) {
    this.color = color;
  }
}

function startGame() {
  player1Name = document.getElementById("player1").value;
  player2Name = document.getElementById("player2").value;
  console.log("Player 1: " + player1Name);
  console.log("Player 2: " + player2Name);
  countdown = 0;
  timer = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  countdown++;
  document.getElementById("countdown").innerHTML = countdown.toString();
  if (countdown > 20) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "Time's up!";
  }
}

function createMatrix(Rows, numCols, squareSize, startX, startY, color, distance) {
  const matrix = [];
  for (let i = 0; i < Rows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      const x = startX + j * squareSize + j * distance;
      const y = startY + i * squareSize - i * distance;
      const square = new TheSquare(x, y, color);
      row.push(square);
    }
    matrix.push(row);
  }
  return matrix;
}

function createFrame(rows, numCols, frameSize, startX, startY, color, distance) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      const x = startX + j * frameSize - j * distance;
      const y = startY + i * frameSize + i * distance;
      const frame = new TheFrame(x, y, color);
      row.push(frame);
    }
    matrix.push(row);
  }
  return matrix;
}

let matrix = [];
let matrix1 = [];
let matrix2 = [];

function setup() {
  var cnv = createCanvas(1100, 800);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height);
  cnv.position(x, y);

  matrix = createMatrix(9, 9, 65, 250, 125, "#B8860B", 5);
  matrix1 = createFrame(11, 1, 50, 150, 105, "#7e5835", 2);
  matrix2 = createFrame(11, 1, 50, 875, 105, "#7e5835", 2);

  cnv.mouseClicked(handleMouseClick); // Call handleMouseClick on mouse click
}

function draw() {
  background("#254117");

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const square = row[j];
      square.draw();
    }
  }
  for (let i = 0; i < matrix1.length; i++) {
    const row = matrix1[i];
    for (let j = 0; j < row.length; j++) {
      const frame = row[j];
      frame.draw();
    }
  }
  for (let i = 0; i < matrix2.length; i++) {
    const row = matrix2[i];
    for (let j = 0; j < row.length; j++) {
      const frame = row[j];
      frame.draw();
    }
  }
  drawCircle(circle1X, circle1Y, "#AFEEEE");
  drawCircle(circle2X, circle2Y, "#F70D1A");
  
  // Draw the selected wall
  if (selectedWallType && selectedWallX !== null && selectedWallY !== null) {
    if (selectedWallType === 'horizontal') {
      fill("#827839");
      rect(matrix[selectedWallY][selectedWallX].x, matrix[selectedWallY][selectedWallX].y + 50, 130, 10);
    } else if (selectedWallType === 'vertical') {
      fill("#827839");
      rect(matrix[selectedWallY][selectedWallX].x + 60, matrix[selectedWallY][selectedWallX].y, 10, 110);
    }
  }
}

function handleMouseClick() {
  const mouseXPos = mouseX;
  const mouseYPos = mouseY;

  // Check if the click is within the matrix area
  if (
    mouseXPos >= 250 && // Check if click is to the right of the left margin
    mouseXPos <= 910 && // Check if click is to the left of the right margin
    mouseYPos >= 125 && // Check if click is below the top margin
    mouseYPos <= 675 // Check if click is above the bottom margin
  ) {
    const squareX = Math.floor((mouseXPos - 250) / 70); // Calculate the square X position
    const squareY = Math.floor((mouseYPos - 125) / 60); // Calculate the square Y position
    
    // Update the selected wall coordinates
    selectedWallX = squareX;
    selectedWallY = squareY;
  }
}

function setWallType(wallType) {
  selectedWallType = wallType;
}
