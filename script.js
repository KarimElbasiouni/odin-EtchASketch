
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
            e.target.style.backgroundColor = color;   
        }
    })
}

const gridSizeSlider = document.querySelector('input[type = range]');
let gridSizeValue = 16;
function adjustGridSize(){
    const gridSizeSlider = document.querySelector('input[type = range]');
    gridSizeValue = gridSizeSlider.value;
    return gridSizeValue
    
}

gridSizeSlider.addEventListener('change', (e)=>{
    console.log(e);
    let dimension = adjustGridSize();
    document.querySelector('label#adjustSize').textContent = dimension + ' x ' + dimension;
    clearGrid();
    createGrid(dimension);
})
sketch();
function clearGrid(){
    let subContainers = document.querySelectorAll('div#subContainer');
    subContainers.forEach((subContainer) => {
        while (subContainer.firstChild){
            subContainer.removeChild(subContainer.firstChild);
        } 
        subContainer.parentNode.removeChild(subContainer);
    })


}

createGrid(16);
