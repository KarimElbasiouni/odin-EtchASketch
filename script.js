
const container = document.querySelector('#gridContainer');

// 'createGrid' creates an n x n grid of empty divs
function createGrid(n = 16){ 
    for(let i = 1; i<= n; i++){
        let subContainer = document.createElement('div')
        subContainer.setAttribute("id","subContainer" )
        container.appendChild(subContainer);

        for (let j=1; j<=n; j++){

            let newDiv = document.createElement('div');
            subContainer.appendChild(newDiv);
        }
    }
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

let color = '#000000'
function pickColor(){
    const colorPicker = document.querySelector('input[type = color]');
    color = colorPicker.value;


}

createGrid(16);
sketch();
pickColor();