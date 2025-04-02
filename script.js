/*on page load:
    1. locate container div
    2. generate 16x16 flex box grid (960px wide):
        2a. create a function to generate a row flexbox div with 16 squares
        2b. create a function to add css to those squares
        2c. run it 16 times to create 16x16 grid
    3. create a 'hover' effect that changes grid square color:
        3a. each square has event listener on mouse enter/leave
        3b. have a function which changes css elements to make the pixelated color trail effect\
    4. create a button with a pop-up that asks a user for number of squares (ex "Entered 64" would be 64x64)
        4a. function clear the current grid
        4b. call initial function that generates a grid with a new entered parameter 
        4c. Have limits of min 1, max 100
    Extra:
        1. Randomize square rgb values with each interaction
        2. Darken the square by 10% with each interaction (achieve fully Colored or Black square)
*/

//GLOBALS
const INITIAL_GRID_NUMBER = 16;
const MAX_GRID_WIDTH = 60; //rem
//END GLOBALS

onLoad();

function onLoad(){
    createGrid(INITIAL_GRID_NUMBER);
}

function createGrid(gridNumber){
    const containerDiv = document.querySelector('div.container');
    for(i=0;i<gridNumber*gridNumber;i++){
        const newSquare = createSquare((MAX_GRID_WIDTH)/INITIAL_GRID_NUMBER);
        containerDiv.appendChild(newSquare);
    }
}

function createSquare(dimensions){
    const newSquare = document.createElement("div");
    newSquare.style.width=`${dimensions}rem`;
    newSquare.style.height=`${dimensions}rem`;
    newSquare.classList.add('square');
    newSquare.addEventListener("mouseenter",changeSquareColor);
    newSquare.addEventListener("mouseleave",removeSquareColor);
    return newSquare;
}

function changeSquareColor(){
    this.classList.remove('offSquare');
    this.style.backgroundColor = getRandomRgbColor();
}

function removeSquareColor(){
    this.style.removeProperty('background-color');
    this.classList.add('offSquare');
}

function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }