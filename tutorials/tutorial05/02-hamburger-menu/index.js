// Your code here.
function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    const button = document.querySelector("#menu-toggle");
    //  shortcut: same as the if-else 
    nav.classList.toggle("active");
    button.classList.toggle("active");

}


/* 

What happens to the nav links when the screen reaches a certain size?
    -> within the media querie
        --> nav links has changed its postion to absolute and offset to right -300
        --> the reason we do not see nav is because overflow is hidden ( @ body)
    
When the hamburger menu is clicked, we want it to move back over (on-screen)
    -> First step is to target the styling
        --> const nav = document.querySelector(".nav-links");

    --> Next is to show the menu when clicked (or active)
        --> nav.className = "nav-links active;"
    
    -> With the current code, the nav slides over- but when clicked again, it remains - how do we fix it?
        --> We could use an if statement
            -->     if (nav.className === "nav-links active") {
                        nav.className = "nav-links";
                    } else {
                    nav.className = "nav-links active";
                    }
            --> java has a function that does this exact thing! -> nav.classList
                    -> Functions allowed with add toggle remove
                    -> nav.classList.toggle("active"); 
                        --> turning the 2nd active class on/off
                            ---> if nav has the active class remove it and vice versa
                            ---> it's the same as the if-else
     
How to get the button to turn into an x when clicked?
    -> this is also based on a class named active!
            --> when menu toggle has an active button, it'll change the 3 hori. bars to look like an x
    -> Now we need to target a button and add the toggle shortcut for it too
    
        --> const button = document.querySelector("#menu-toggle");
        --> button.classList.toggle("active");
    

* when both nav-links and active are applied to the DOM - it will set right = 0 otherwise right = 300
    adding active overrides the right with 0
* when applying multiple classes, you need a space (no comma) with selectors- they need to touch


*/
