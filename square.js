function Square() {
    const squaresNumber = 5;
    const marginLeft = 20;
    const marginRigth = 20;
    const squaresZone = limitRight - marginLeft - marginRigth;
    const squaresDistance = 10;
  
    const squareWidth = 
      Math.round(squaresZone / squaresNumber) - squaresDistance;
  
    for (let i = 0; i < squaresNumber; i++) {
      squares.push({
        color: "#0000ff",
        x: marginLeft + i * squaresDistance + i * squareWidth,
        y: 40,
        width: squareWidth,
        heigth: 20,
      });
     }
  }
  
  function showSquare() {
    for (let i = 0; i < squares.length; i++) {
      fill(squares[i].color);
      rect(squares[i].x, squares[i].y,squares[i].width, squares[i].heigth);
    }
  }