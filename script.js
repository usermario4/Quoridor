let player1Name;
let player2Name;
let countdown;
let timer;

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

class TheSquare {
  #x;
  #y;
  #color;
  constructor(x, y, color) {
    this.#color = color;
    this.#x = x;
    this.#y = y;
  }
  draw() {
    fill(this.#color);
    rect(this.#x, this.#y, 60, 50, 5);
  }
  setColor(color) {
    this.#color = color;
  }
}

class theFrame {
  #x;
  #y;
  #color;
  constructor(x, y, color) {
    this.#color = color;
    this.#x = x;
    this.#y = y;
  }
  draw() {
    fill(this.#color);
    rect(this.#x, this.#y, 90, 45, 10);
  }
  setColor(color) {
    this.#color = color;
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
      //if (i < Rows && (j === 0 || j === numCols - 1)) {
      //    square.setColor("#FF0000");
      //   }

      row.push(square);
    }
    matrix.push(row);
  }
  return matrix;
}

function createFrame(rows, numCols, frameSize, startX, startY, color, distance) {
  const matrix1 = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      const x = startX + j * frameSize - j * distance;
      const y = startY + i * frameSize + i * distance;


      const frame = new theFrame(x, y, color);
      row.push(frame);
    }
    matrix1.push(row);
  }
  return matrix1;
}
function createFrame(rows, numCols, frameSize, startX, startY, color, distance) {
  const matrix2 = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      const x = startX + j * frameSize - j * distance;
      const y = startY + i * frameSize + i * distance;


      const frame = new theFrame(x, y, color);
      row.push(frame);
    }
    matrix2.push(row);
  }
  return matrix2;
}

let matrix = [];
let matrix1 = [];
let matrix2 = [];

function setup() {
  var cnv = createCanvas(1100, 800);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height);
  cnv.position(x, y);

  matrix = createMatrix(9, 9, 65, 250, 125, "#e2bc74", 5);
  matrix1 = createFrame(11, 1, 50, 150, 105, "#7e5835", 2);
  matrix2 = createFrame(11, 1, 50, 875, 105, "#7e5835", 2);
}

function draw() {
  background("#222222");
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
  ;
}