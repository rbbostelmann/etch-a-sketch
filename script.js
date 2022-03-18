//Canvas | Tiles variables
let canvas = document.getElementById("canvas")
let tiles;

//Button variables
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
            document.querySelectorAll("#tile")[i].style.backgroundColor = "black";
        })
    }
}

//Rainbow draw function with mouse over
function rainbow() {
    for (let i = 0; i <= 255; i++) {
        tiles[i].addEventListener("mouseover", () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            document.querySelectorAll("#tile")[i].style.backgroundColor = "#" + randomColor;
            checking = false
        })
    }
}

//Eraser function with mouse over
function erase() {
    for (let i = 0; i <= 255; i++) {
        tiles[i].addEventListener("mouseover", () => {
            document.querySelectorAll("#tile")[i].style.backgroundColor = "white";
        })
    }
}

//Clear function that clears the canvas
function clear() {
    for (let i = 0; i <= 255; i++) {
        document.querySelectorAll("#tile")[i].style.backgroundColor = "white";
    }
}

///**WRITE CODE FOR RESIZING BUTTONS */