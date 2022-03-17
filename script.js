let canvas = document.getElementById("canvas")
let tiles;


//Populates the canvas with the tiles
window.onload = (e) => {
    for (let i = 1; i <= 256; i++) {
        const newDiv = document.createElement("div")
        newDiv.setAttribute("id", "tile")
        newDiv.classList.add("tile-" + i)
        newDiv.classList.add("off")
        canvas.appendChild(newDiv)

        //"Return" tiles to the global variable
        tiles = document.querySelectorAll("#tile")
    }
}

//Draw function with mouse over
function draw() {
    for (let i = 0; i <= 255; i++) {
        tiles[i].addEventListener("mouseover", () => {
            if (tiles[i].classList.contains("off")) {
                tiles[i].classList.remove("off")
                tiles[i].classList.add("on")
            }
        })
    }
}

//Eraser function with mouse over
function eraser() {
    for (let i = 0; i <= 255; i++) {
        tiles[i].addEventListener("mouseover", () => {
            tiles[i].classList.remove("on")
            tiles[i].classList.add("off")
        })
    }
}