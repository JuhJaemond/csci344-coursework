let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"
    draw5Circles();
    draw5RedSquares();
    draw5CirclesWhile();
    draw5CirclesFor();
    drawNCircle(20);
    drawNCirclesFlexible(30, 25, 400, 0);
    drawNCirclesFlexible(4, 100, 100, 200);
    drawNCirclesFlexible(8, 50, 700, 100);
    drawNShapesFlexible(30, 30, 335, 0, "square");
    drawNShapesFlexible(4, 100, 120, 200, "circle");
    drawNShapesFlexible(8, 50, 725, 25, "square");
    drawNShapesDirectionFlexible(30, 30, 335, 0, "square", "column");
    drawNShapesDirectionFlexible(4, 100, 120, 200, "circle", "row");
    drawNShapesDirectionFlexible(8, 50, 725, 425, "circle", "row");
    drawGrid(canvasWidth, canvasHeight);
 
    
}

// my first function
function draw5Circles() {
    noFill();
    // fill('red');
    let x = 0;
    let y = 200;
    let d = 50;

    let i = 0; 
    while (i < 5) {
        circle(x,y + 50 * i ,d); 
        i++;
    }
    // centerX, centerY, radius
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);
}

function draw5RedSquares() {
    fill("red");
    square(320, 200, 50); // topLeftX, topLeftY, width
    square(320, 250, 50);
    square(320, 300, 50);
    square(320, 350, 50);
    square(320, 400, 50);
}

 function draw5CirclesWhile () {
     fill("yellow");
        let x = 200;
        let y = 500;
        let d = 50;
  
      let i = 0
        while (i < 5) {
            circle(x, y+50 * i, d);
            i++;
        }
 } /* it works!! */

 function draw5CirclesFor() {
    fill("blue");
    let x = 200;
    let y = 100;
    let d = 50;

    for (let i = 0; i < 5; i++) {
        circle(x, y +50 * i, d);
    } /* this also works! */
 }

 function drawNCircle(n) {
    fill("orange");
    let x = 100;
    let y = 600;
    let d = 50;

    for (i = 0; i < n; i++) {
        circle(x, y + 50 * i, d);
    }
 }

 function drawNCirclesFlexible(n, size, x, y) {
    fill("purple");
    for(let i = 0; i < n; i++) {
        circle(x, y + size * i, size);
    }
 }

 function drawNShapesFlexible(n, size, x, y, shape) {
    fill("green");
    for(let i = 0; i < n; i++) {
        if (shape === "circle") {
            circle(x, y + size * i, size);
        } else if (shape === "square") {
            rect(x, y + size * i, size, size);
        } 
    }
 }

//  function drawNShapesDirectionFlexible(n, size, x, y, shape, direction) {
//     fill("dark pink");
//     for(let i = 0; i < n; i++) {
//         if (shape === "circle") {
//             circle(x, y + size * i, size);
//         } else if (shape === "square") {
//             rect(x, y + size * i, size, size);
//         } 
//         if (direction === "row") {
//             row(x + size * i);
//         } else if (direction === "column") {
//             col(y + size * i)
//         }
//     }
//  }

 function drawNShapesDirectionFlexible(n, size, x, y, shape, direction) {
    fill("teal");
    for (let i = 0; i < n; i++) {
        if (direction === "row") {
            if (shape === "circle") {
                circle(x + size * i, y, size);
            } else if (shape === "square") {
                rect(x + size * i, y, size, size);
            }
        } else if (direction === "column") {
            if (shape === "circle") {
                circle(x, y + size * i, size);
            } else if (shape === "square") {
                rect(x, y + size * i, size, size);
            }
        }
    }
}
