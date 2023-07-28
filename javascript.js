const DEFAULT_COLOR = '#333333'
const DEFAULT_SIZE = 16 

const grid = document.querySelector('.grid')
const resetButton = document.getElementById('reset')
const colorPick = document.querySelector("#colorPick")
const eraser = document.getElementById('eraser')
const color = document.getElementById('color')

let currentSize = DEFAULT_SIZE
let setCurrentColor = DEFAULT_COLOR
let square = document.querySelector('.square')
let amountSlider = document.getElementById('sizeSlider')


sizeChange(currentSize)

// Color option 

colorPick.addEventListener('input', () => {
    setCurrentColor = colorPick.value;
})

resetButton.addEventListener('click', ()=>{
    reset()
    sizeChange(currentSize)})

eraser.addEventListener('click', ()=> {
    grid.addEventListener('mouseover', function(e){
        if(e.target.matches('.square.passed'))
            e.target.style.backgroundColor = '#FFFFFF';

    }
    )})

   color.addEventListener('click', ()=> {
        grid.addEventListener('mouseover', function(e){
            if(e.target.matches('.square'))
        e.target.style.backgroundColor = setCurrentColor;
        }
        )})   
// size option

amountSlider.oninput = function(){
    currentSize= amountSlider.value;
    sizeShow.innerHTML = this.value
    sizeChange(currentSize)
}


function sizeChange(currentSize){
    let squareWidth = (400/currentSize)-2;
    createGrid(currentSize, squareWidth);
}

function createGrid(currentSize, squareWidth){
    reset()
    let boxAmount = currentSize * currentSize
    // loops amount of boxes created
    for(let i =0; i<boxAmount; i++){
    const div =document.createElement('div')
    // creating box and giving elements
    div.classList.add('square')
    div.style.width= `${squareWidth}px`;
div.style.height=`${squareWidth}px`;
div.style.backgroundColor= '#FFFFFF'
grid.addEventListener('mouseover', function(e){
    if(e.target.matches('.square')){
        div.classList.add('passed')
        e.target.style.backgroundColor = setCurrentColor
    }
})
grid.appendChild(div);
}}

function reset(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
}



