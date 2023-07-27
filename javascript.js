const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16 
const grid = document.querySelector('.grid')
const reset = document.querySelector('.reset')
let currentSize = DEFAULT_SIZE
let setCurrentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let square = document.querySelector('.square')

reset.addEventListener('click', ()=> deleteGrid(grid)
)

// function deleteGrid(grid){
//     while(grid.firstChild){
//         grid.removeChild(grid.firstChild)
//     }
// }

// Color option 
const colorPick = document.querySelector("#colorPick")
colorPick.addEventListener('input', () => {
    setCurrentColor = colorPick.value;
})

// size option 
let amountSlider = document.getElementById('sizeSlider')
amountSlider.oninput = function(){
    currentSize= amountSlider.value;
    sizeShow.innerHTML = this.value
    sizeChange(currentSize)
}


function sizeChange(currentSize){
    let squareWidth = (400/currentSize)-2;
    console.log(squareWidth);
    createGrid(currentSize);
}

function createGrid(currentSize){
    let boxAmount = currentSize * currentSize
    for(let i =0; i<boxAmount; i++){
    const div =document.createElement('div')
    div.classList.add('square')
    div.style.width= `${currentSize}px`;
div.style.height=`${currentSize}px`
grid.appendChild(div);
}}


