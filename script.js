
const container = document.querySelector('#gridContainer');
let numDimension = 0;

// 'createGrid' creates an n x n grid of empty divs
function createGrid(n = 16){ 
    numDimension = n;
    for(let i = 1; i<= n; i++){
        let subContainer = document.createElement('div')
        subContainer.setAttribute("id","subContainer" )
        container.appendChild(subContainer);

        for (let j=1; j<=n; j++){

            let newDiv = document.createElement('div');
            subContainer.appendChild(newDiv);
        }
    }
    container.backgroundColor = "white";
}
createGrid(16);


let color = '#000000';
function pickColor(){
    const colorPicker = document.querySelector('input[type = color]');
    color = colorPicker.value;
}


let isMouseDown = false; 
function sketch(){
    container.addEventListener('mousedown', ()=> {
        isMouseDown = true;
    }) 
    container.addEventListener('mouseup', () =>{
        isMouseDown = false;
    })
    container.addEventListener("mouseover", (e) => {
        pickColor();
        if (isMouseDown){
            if (isRandom){
                let randomR = Math.floor(Math.random()*255 + 1);
                let randomG = Math.floor(Math.random()*255 + 1);
                let randomB = Math.floor(Math.random()*255 + 1);
                e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            } else if (isEraser) {
                e.target.style.backgroundColor = 'white';  
            } else{
                e.target.style.backgroundColor = color;
            }
        }
    })
}
sketch();

const gridSizeSlider = document.querySelector('input[type = range]');
let gridSizeValue = 16;
function adjustGridSize(){
    const gridSizeSlider = document.querySelector('input[type = range]');
    gridSizeValue = gridSizeSlider.value;
    return gridSizeValue;
    
}

gridSizeSlider.addEventListener('change', (e)=>{
    console.log(e);
    let dimension = adjustGridSize();
    document.querySelector('label#adjustSize').textContent = dimension + ' x ' + dimension;
    clearGrid();
    createGrid(dimension);
})

function clearGrid(){
    let subContainers = document.querySelectorAll('div#subContainer');
    subContainers.forEach((subContainer) => {
        while (subContainer.firstChild){
            subContainer.removeChild(subContainer.firstChild);
        } 
        subContainer.parentNode.removeChild(subContainer);
    })


}

function reset(){
    clearGrid();
    createGrid(numDimension);
}

const resetButton = document.querySelector('button#reset');
resetButton.addEventListener('click', (e)=>{
    reset()
    console.log(e);
})

let isRandom = false;
let isPen = true;
let isEraser = false;
const randomButton = document.querySelector('button#random');
randomButton.addEventListener('click', ()=>{
    isPen = false;
    isEraser = false;
    isRandom = true;
    randomButton.setAttribute('class', 'clicked');
});

const penButton = document.querySelector('button#pen');
penButton.addEventListener('click', ()=>{
    isRandom =false; 
    isEraser = false;
    isPen = true;
    penButton.setAttribute('class', 'clicked');
});

const eraserButton = document.querySelector('button#eraser');
eraserButton.addEventListener('click', ()=>{
    isRandom =false; 
    isEraser = true;
    isPen = false;
    eraserButton.setAttribute('class', 'clicked');
});