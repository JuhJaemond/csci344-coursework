
const changeColor = (selector,color) => {
    console.log(selector,color);
    const el = document.querySelector(selector);
    if (el.style.backgroundColor === color) {
        el.style.backgroundColor = "white";
    } else {
        el.style.backgroundColor = color;
    }
    document.querySelector(selector).style.backgroundColor = color;

}

function reset() {
    const sections = document.querySelector(".my-section");
    for(const section of sections) {
        
    }
}

// two ways to write functions (ES6) 

// const makeRed = () => {
//     // your code here...
//     console.log('Change background to red');
//     document.querySelector('body').style.backgroundColor = 'red';
//     document.querySelector('#section1').style.backgroundColor = 'red';
// };

// const makeBlue = () => {
//     // your code here...
//     console.log('Change background to blue');
//     document.querySelector('body').style.backgroundColor = 'blue';
//     document.querySelector('#section2').style.backgroundColor = 'blue';
// };

// const makePink = () => {
//     // your code here...
//     console.log('Change background to pink');
//     document.querySelector('body').style.backgroundColor = 'pink';
//     document.querySelector('#section3').style.backgroundColor = 'pink';
// };

// const makeOrange = () => {
//     // your code here...
//     console.log('Change background to orange');
//     document.querySelector('body').style.backgroundColor = 'Orange';
//     document.querySelector('#section4').style.backgroundColor = 'Orange';
// };

