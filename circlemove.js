
let circle1X = 560;
let circle1Y = 150;

let circle2X=560;
let circle2Y=630;
const boundryLeft=279;

  function drawCircle(x, y,color) {
    fill(color);
    ellipse(x, y, 40, 40); // Draw a circle at the specified position
  }
  function keyPressed() {if(circle1X>279){
    if (keyCode === LEFT_ARROW ) {
     if (circle1X>boundryLeft)
     { circle1X -= 70;}
    } else if (keyCode === RIGHT_ARROW) {
      circle1X += 70;
    } else if (keyCode === UP_ARROW) {
      circle1Y -= 60;
    } else if (keyCode === DOWN_ARROW) {
      circle1Y += 60;
    }
    if (key === 'a' || key === 'A') {
      circle2X -= 70;
    } else if (key === 'd' || key === 'D') {
      circle2X += 70;
    } else if (key === 'w' || key === 'W') {
      circle2Y -= 60;
    } else if (key === 's' || key === 'S') {
      circle2Y += 60;
    }
  }
  }
 
  