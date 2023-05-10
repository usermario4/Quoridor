function initSquare() {
    const squaresNumber = 5;
    const marginLeft = 20;
    const marginRigth = 20;
    const squaresZone = limitRight - marginLeft - marginRigth;
    const squaresDistance = 10;

    const squareWidth =
        Math.round(squaresZone / squaresNumber) - squaresDistance;

    for (let i = 0; i < squaresNumber; i++) {
        squares.push({
            color: "red",
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
        rect(squares[i].x, squares[i].y, squares[i].width, squares[i].heigth);
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
    draw(){
        fill(this.#color);
         rect(this.#x, this.#y, 50, 30);
         fill("red");

    }
    

}