
// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}


/*
==================================================
EXERCISE 9.5 - RESPONDING TO LOAD EVENTS
==================================================

Step 2: Select div1 and display its content

var divToGet = document.getElementById("div1");
alert(divToGet.innerHTML);

Step 4: Execute code after DOM is loaded

window.addEventListener("load", function() {
    var divToGet = document.getElementById("div1");
    alert(divToGet.innerHTML);
});

==================================================
EXERCISE 9.6 - DEBUGGING EVENTS
==================================================

Step 7: Add mouseover event listeners to moving divs

window.addEventListener("load", function() {
    var divs = document.querySelectorAll(".movingDiv");

    for (i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function(e) {
            alert("triggered by " + e.target.id);
        });
    }
});

==================================================
FINAL COMBINED CODE
==================================================
*/

// Global variable
var boxClass = 'movingDiv';

// Function to create a div
function outputBox(num) {
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}

// Exercise 9.5 and 9.6
window.addEventListener("load", function() {

    // Exercise 9.5: Display content of div1
    var divToGet = document.getElementById("div1");
    alert(divToGet.innerHTML);

    // Exercise 9.6: Select all moving divs
    var divs = document.querySelectorAll(".movingDiv");

    // Add mouseover event to each div
    for (i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function(e) {
            alert("triggered by " + e.target.id);
        });
    }
});
