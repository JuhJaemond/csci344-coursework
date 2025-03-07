let currentPosition = 0; //starting point
let gap = 10; // space between items
const slideWidth = 400; // self-explanatory 


function moveCarousel(direction) {  //function for moving through the carousel
    const items = document.querySelectorAll(".carousel-item"); //selecting items with the .carousel-item class

    if (direction == "forward") {
        // minus 2 b/c first 2 slides already showing
        if (currentPosition >= items.length - 2) {
            return false;
        }
        currentPosition++;   // checks if current position is greater than or equal to the length of the carousel items, if not, it increments through until currentPosition is the same as length of the item when moving forward
        if (currentPosition == 0) {
            return false;
        }
        currentPosition--;
    } // same premise but backwards, if currentPosition reaches 0 no further movement is allowed
    


   

    const offset = (slideWidth + gap) * currentPosition;
// initializing the current offset by the width and gap of the slides shown 
    for (const item of items) {
        item.style.transform = `translateX(-${offset}px)`;
    }
// changes the transform by moving to the left according to the current offset and changes that into a string
};