
/*
==================================================
EXERCISE 9.7 - WORKING WITH FORMS
==================================================

Function setBackground() changes the background
color when an input field receives or loses focus.

==================================================
*/

// Handle focus and blur events
function setBackground(e) {

    if (e.type == "focus") {
        e.target.style.backgroundColor = "#FFE393";
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }
}

// Initialize event listeners after page loads
window.addEventListener("load", function() {

    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    for (i = 0; i < fields.length; i++) {

        // Add focus event
        fields[i].addEventListener("focus", setBackground);

        // Add blur event
        fields[i].addEventListener("blur", setBackground);
    }
});

