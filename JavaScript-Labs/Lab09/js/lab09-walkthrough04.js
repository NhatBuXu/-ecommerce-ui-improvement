
/*
==================================================
EXERCISE 9.4 - SIMPLE EVENT HANDLING
==================================================

Step 2: Simple click handler

function simpleHandler(event) {
    alert("button was clicked");
}

Step 3: Mouseover image

var img = document.getElementById("mainImage");

img.addEventListener("mouseover", function(event) {
    img.className = "makeItGray";
});

Step 4: Mouseout image

img.addEventListener("mouseout", function(event) {
    img.className = "makeItNormal";
});

Step 5 and 6: Toggle content with CSS transitions
and setTimeout()

==================================================
FINAL COMBINED CODE
==================================================
*/

// Select button and content
var btn = document.getElementById("testButton");
var img = document.getElementById("mainImage");

// Handle button click
function simpleHandler(event) {
    var content = document.getElementById("content");

    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";

        // Hide content after 1000 milliseconds
        setTimeout(function() {
            content.style.display = "none";
        }, 1000);
    }
    else {
        btn.innerHTML = "Hide";
        content.style.display = "block";

        // Restore normal style after 500 milliseconds
        setTimeout(function() {
            content.className = "makeItNormal";
        }, 500);
    }
}

// Add click event listener
btn.addEventListener("click", simpleHandler);

// Change image style when mouse moves over it
img.addEventListener("mouseover", function(event) {
    img.className = "makeItGray";
});

// Restore image style when mouse leaves it
img.addEventListener("mouseout", function(event) {
    img.className = "makeItNormal";
});


