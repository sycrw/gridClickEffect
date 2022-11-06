const wrapper = document.getElementById("tiles");

let columns = Math.floor(document.body.clientWidth/200);
let rows = Math.floor(document.body.clientHeight/200);


const createTile = index => {
    const tile = document.createElement("div");

    tile.classList.add("tile");
    
    return tile;
}

const createTiles = quantity => {
    
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
      });
   
}
const createGrid = () => {
    wrapper.innerHTML = "";
    columns = Math.floor(window.innerWidth/100);
    rows = Math.floor(window.innerHeight /100);
    wrapper.style.setProperty("--columns",columns);
    wrapper.style.setProperty("--rows",rows);
    createTiles(columns * rows);
    
}

window.onload = function() {       
    setTimeout(function(){
        console.log("test");
        createGrid();
    },5); 
}
window.onresize = () => createGrid();
createTiles(columns * rows);