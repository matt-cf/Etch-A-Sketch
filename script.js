let brushColor = 'red'; 
let click = false; //click to start drawing

function createBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let amount = size * size;
    for (x = 0; x < amount; x++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorDraw)
        square.style.backgroundColor = 'grey';
        square.className = "square";
        board.appendChild(square);
    }
}

createBoard(16);

function changeSize(input) {
    if (input <= 2 || input >=100) {
        alert('Input must be bigger than 2 or smaller than 100')
    } else {
        createBoard(input);
    }
}

function colorDraw () {
    if (click) {
        if (brushColor === 'rainbow') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` 
        } else {
            this.style.backgroundColor = brushColor;
        }
    }
    
} 

function changeColor(option){
    brushColor = option; 
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'grey');
} 

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') {
        click = !click;
        if(click) {
            document.querySelector('.status').textContent = 'Coloring'
        } else {
            document.querySelector('.status').textContent = 'Not Coloring'
        }
    }
}); //setting click as true or false to start or stop drawing