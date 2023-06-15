let circle1X = 560;
let circle1Y = 150;

let circle2X = 560;
let circle2Y = 630;

let currentPlayer = 1; // Variable to track the active player

const boundryLeft = 289;
const boundryRight = 840;
const boundryTop = 200;
const boundryBottom = 630;
const circleDistance = 60; // Distance between circle centers
const minDistance = 50; // Minimum distance between circles (radius + radius)

function drawCircle(x, y, color) {
    fill(color);
    ellipse(x, y, 40, 40);
}

if (circle1Y <= boundryTop) {
    displayMessage("Player 1 won!");
} else if (circle2Y >= boundryBottom) {
    displayMessage("Player 2 won!");
}

function displayMessage(message) {
    textSize(30);
    textAlign(CENTER);
    fill(255, 0, 0); // Set text color to red
    text(message, width / 2, height - 20);
}

function keyPressed() {
    if (currentPlayer === 1) {
        if (keyCode === LEFT_ARROW) {
            if (circle1X > boundryLeft) {
                let newCircle1X = circle1X - circleDistance - 10;
                if (dist(newCircle1X, circle1Y, circle2X, circle2Y) >= minDistance) {
                    circle1X = newCircle1X;
                    currentPlayer = 2; // Switch to player 2

                }
            }
        } else if (keyCode === RIGHT_ARROW) {
            if (circle1X < boundryRight) {
                let newCircle1X = circle1X + circleDistance + 10;
                if (dist(newCircle1X, circle1Y, circle2X, circle2Y) >= minDistance) {
                    circle1X = newCircle1X;
                    currentPlayer = 2; // Switch to player 2

                }
            }
        } else if (keyCode === UP_ARROW) {
            if (circle1Y > boundryTop) {
                let newCircle1Y = circle1Y - circleDistance;
                if (dist(circle1X, newCircle1Y, circle2X, circle2Y) >= minDistance) {
                    circle1Y = newCircle1Y;
                    currentPlayer = 2; // Switch to player 2

                }
            }
        } else if (keyCode === DOWN_ARROW) {
            if (circle1Y < boundryBottom) {
                let newCircle1Y = circle1Y + circleDistance;
                if (dist(circle1X, newCircle1Y, circle2X, circle2Y) >= minDistance) {
                    circle1Y = newCircle1Y;
                    currentPlayer = 2; // Switch to player 2

                }
            }
        }
    } else if (currentPlayer === 2) {
        if (key === 'a' || key === 'A') {
            if (circle2X > boundryLeft) {
                let newCircle2X = circle2X - circleDistance - 10;
                if (dist(circle1X, circle1Y, newCircle2X, circle2Y) >= minDistance) {
                    circle2X = newCircle2X;
                    currentPlayer = 1; // Switch to player 1

                }
            }
        } else if (key === 'd' || key === 'D') {
            if (circle2X < boundryRight) {
                let newCircle2X = circle2X + circleDistance + 10;
                if (dist(circle1X, circle1Y, newCircle2X, circle2Y) >= minDistance) {
                    circle2X = newCircle2X;
                    currentPlayer = 1; // Switch to player 1

                }
            }
        } else if (key === 'w' || key === 'W') {
            if (circle2Y > boundryTop) {
                let newCircle2Y = circle2Y - circleDistance;
                if (dist(circle1X, circle1Y, circle2X, newCircle2Y) >= minDistance) {
                    circle2Y = newCircle2Y;
                    currentPlayer = 1; // Switch to player 1

                }
            }
        } else if (key === 's' || key === 'S') {
            if (circle2Y < boundryBottom) {
                let newCircle2Y = circle2Y + circleDistance;
                if (dist(circle1X, circle1Y, circle2X, newCircle2Y) >= minDistance) {
                    circle2Y = newCircle2Y;
                    currentPlayer = 1; // Switch to player 1

                }
            }
        }
    }
}
