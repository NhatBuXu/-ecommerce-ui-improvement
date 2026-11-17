

/*
==================================================
EXERCISE 9.2 - DOM FAMILY RELATIONS
==================================================

Console exploration:

document.getElementById("first");

document.getElementById("first").firstChild;

document.getElementById("first").firstChild.nextSibling;

document.getElementById("first").parentNode;

==================================================
*/

// Select the stories element
var stories = document.getElementById("stories");

// Loop through all child nodes
for (i = 0; i < stories.childNodes.length; i++) {

    // Display child node information in Console
    console.log(
        "child " + i +
        " =" + stories.childNodes[i] +
        " nodeType=" + stories.childNodes[i].nodeType
    );

    // Change background color of non-text nodes
    if (stories.childNodes[i].nodeType == 1) {
        stories.childNodes[i].style.backgroundColor = "lightgreen";
    }
}
