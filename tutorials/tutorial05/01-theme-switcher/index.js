/*
    ------------
    Instructions
    ------------
    Open styles.css and scroll down to ~line 70.
    You will see three classes -- ocean, desert, and high-contrast --
    which correspond to three different themes. If you apply any of these 
    classes to the <body></body> tag and preview your HTML, you will see 
    that the theme changes. Try it out! You job is to make the buttons 
    dynamically change the theme of the web page.

    Hints:
    1. Create a single function called changeClass() that has one parameter.
       This paremeter will store the name of the class as a string.
    2. Within the changeClass() function body, set the body's class attribute
       the name of the class passed into the function.
    3. Attach your changeClass() function to the click event of each button. Make
       sure you're passing in the correct argument.
    4. Use the cheatsheet associated with this tutorial to figure out how to adjust
       the class.
*/

function changeClass(nameOfClass) {
   const body = document.querySelector("body");
   body.className = nameOfClass;
}


/*
Class Notes!

Need to have each button change when clicked 

   > Create a new function changeClass() {}
      -> within this func:
         --> target the body
            ---> const body = document.querySelector("body");
         --> change the class name
* remember! to get the code to run, it has to be applied to the button (onclick)(w/in the HTML)
   -> onclick="changeClass()"

   > Instead of hard coding one present (i.e. body.className = "ocean";) we're going to set a param. 
      -> function changeClass(nameOfClass)
      and set that to the var. > body.className = nameOfClass;

   > Since we've made a requirement, we need to pass a string representing the class (w/in the HTML)
      ->  <button id="ocean" title="Change to 'Ocean' theme" onclick="changeClass('ocean')">Ocean</button>

*/
