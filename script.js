let canvas = document.getElementById("canvas")
let tiles;

let blackBtn = document.getElementById("black-btn")
let rainbowBtn = document.getElementById("rainbow-btn")
let eraserBtn = document.getElementById("eraser-btn")
let clearBtn = document.getElementById("clear-btn")


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

//Event listener for the black button to start drawing
blackBtn.addEventListener("click", e => {
    draw()
})

//Event listener for the rainbow button to start drawing
rainbowBtn.addEventListener("click", e => {
    rainbow()
})

//Event listener for the black button to start drawing
eraserBtn.addEventListener("click", e => {
    erase()
})

//Event listener for the black button to start drawing
clearBtn.addEventListener("click", e => {
    clear()
})


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

//
function rainbow() {
    tiles[2].addEventListener("mouseover", () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;

    })
}



//Eraser function with mouse over
function erase() {
    for (let i = 0; i <= 255; i++) {
        tiles[i].addEventListener("mouseover", () => {
            tiles[i].classList.remove("on")
            tiles[i].classList.remove("rainbow")
            tiles[i].classList.add("off")
        })
    }
}

//Clear function that clears the canvas
function clear() {
    for (let i = 0; i <= 255; i++) {
        tiles[i].classList.remove("on")
        tiles[i].classList.remove("rainbow")
        tiles[i].classList.add("off")

    }
}