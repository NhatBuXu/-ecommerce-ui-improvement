
/*
==================================================
EXERCISE 9.3 - MODIFYING THE DOM
==================================================

Step 1: Create a text node and paragraph

var first = document.getElementById("first");

var text = document.createTextNode("this is programmatically created");
var p = document.createElement("p");

p.appendChild(text);
first.appendChild(p);

Step 3: Remove an existing list item

var icons = document.getElementById("iconList");
icons.removeChild(document.getElementById("deleteThisOne"));

==================================================
FINAL COMBINED CODE
==================================================
*/

// Create a text node and paragraph
var first = document.getElementById("first");

var text = document.createTextNode("this is programmatically created");
var p = document.createElement("p");

p.appendChild(text);
first.appendChild(p);

// Remove an existing list item
var icons = document.getElementById("iconList");
icons.removeChild(document.getElementById("deleteThisOne"));
