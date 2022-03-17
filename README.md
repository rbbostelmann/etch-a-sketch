# etch-a-sketch

Day 1

I'm thinking about the best way to tackle the problem. So far I've thought that creating a canvas and then spliting it in a 16x16 grid would be the best option, but I'm not so sure now.

I did manage to create the canvas, and also added an event listener so I could work on the different squares that make up the grid, but what if I created multiple canvas (canvases? canvi?), enough for a 16x16 grid, each independent of the other, instead of my original idea?

I worry that doing so could be less optimal, however, taking more space/time than it would otherwise.

Note: I also came to the conclusion I could probably make everything the way I want by adding the html and styling it in css without using <canvas>. Might do that if I can't find a way to make a grid out of the canvas.

---

Day 2

I feel like I made some significant progress attempting to create an object with the "coordinates" for the 16x16 tiles I needed, but I could not figure a way to iterate through them in order to limit the tiles to specific areas:

const tiles = {
A: { x: range(139, 149), y: range(40, 50) },
B: { x: range(149, 159), y: range(50, 60) },
C: { x: range(159, 169), y: range(60, 70) },
D: { x: range(169, 179), y: range(70, 80) },
E: { x: range(179, 189), y: range(80, 90) },
F: { x: range(189, 199), y: range(90, 100) },
G: { x: range(199, 209), y: range(100, 110) },
H: { x: range(209, 219), y: range(110, 120) },
I: { x: range(219, 229), y: range(120, 130) },
J: { x: range(229, 239), y: range(130, 140) },
K: { x: range(239, 249), y: range(140, 150) },
L: { x: range(249, 259), y: range(150, 160) },
M: { x: range(259, 269), y: range(160, 170) },
N: { x: range(269, 279), y: range(170, 180) },
O: { x: range(279, 289), y: range(180, 190) },
P: { x: range(289, 299), y: range(190, 200) }
}

canvas.addEventListener("mousemove", e => {
const x = e.clientX;
const y = e.clientY;

    for (let tile in tiles) {

        ///*** HERE i ALSO TRIED "tile.hasOwnProperty(x)..." BUT IT DID NOT WORK***///

        if (tile.x.includes(x) && tile.y.includes(y)) {
            console.log("A")
        } else {
            console.log("B")
        }
    }

})

///**_Also wrote a range function_**///

function range(start, stop, step) {
let a = [start],
b = start;
while (b < stop) {
a.push(b += step || 1);
}
return a;
}

I will probably resort to my plan B, scraping off the canvas and working on individual div-tiles styled with pseudoclasses in CSS.

---

Day 3

It took me a while to be able to come back and continue this project, but here I am.

for today I decided to scrap the use of the <canvas> tag I was going for and decided to make a 16x16 grid with a set w/h of 520px (that might change in the future).

I then populated the grid with <div id="tile" class="tile"> blocks. Since I needed 256 of them, I used a for loop in the script.js that happens "onload".

I also have two CSS pseudo-classes here:

hover: which I guess will stay, I quite like the effect

active: gonna go, just here for reference

And two other classes that are not yet defined, .reset, which will reset the canvas, and the second pseudo: active, which is commented out just so I remember to maybe add an eraser function for it.

---

Day 4

So, for the first time in a while I had things mostly working out without major roadblocks! Got my draw and erase functions working just fine and all of the tiles respond independently.

I now just need to set some buttons and assign some functions to the buttons and then work on the CSS mostly.

I still want to have a color picker, but will work on that further down the line when all of the other elements are already working and set.

---
