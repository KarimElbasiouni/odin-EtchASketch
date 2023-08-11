
const container = document.querySelector('#gridContainer')
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