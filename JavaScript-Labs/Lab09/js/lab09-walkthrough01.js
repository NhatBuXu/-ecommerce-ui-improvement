
/*
==================================================
EXERCISE 9.1 - BASIC DOM SELECTION
==================================================

Step 2: Select textarea and set its value
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

Step 3: Change page title using innerHTML
var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";

Step 4: Change title directly
document.getElementById("pageTitle").innerHTML = "Even newer title";

Step 5: Get HTML content
msg.value = document.getElementById("first").innerHTML;

Step 6: Get text content
msg.value = document.getElementById("first").innerText;

Step 7: Get class attribute
msg.value = "My class is " + msg.getAttribute("class");

Step 8: Select elements by tag name
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

Step 9: Select all span elements
elem = document.getElementsByTagName("span");
for (i=0; i<elem.length; i++) {
    document.getElementById("msgArea").value +=
        "\n" + elem[i].innerText;
}

Step 10: Select elements by class name
document.getElementById("msgArea").value = "";
var counts = document.getElementsByClassName("count-number");
for (i=0; i<counts.length; i++) {
    document.getElementById("msgArea").value +=
        "\n" + counts[i].innerText;
}

Step 11: Select first paragraph
var ps = document.querySelector("#first p");
document.getElementById("msgArea").value = ps.innerHTML;

Step 12: Select all paragraphs
ps = document.querySelectorAll("#first p");
for (i=0; i<ps.length; i++) {
    document.getElementById("msgArea").value +=
        ps[i].innerHTML + "\n";
}

Step 13: Set class attribute
document.getElementById("msgArea").setAttribute("class", "hidden");

Step 14: Change background color
document.getElementById("features").style.backgroundColor = "green";

==================================================
FINAL COMBINED CODE
==================================================
*/

// Step 2: Select textarea and set its value
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

// Step 3 and 4: Change page title
var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";
document.getElementById("pageTitle").innerHTML = "Even newer title";

// Step 5 and 6: Get HTML and text content
msg.value = document.getElementById("first").innerHTML;
msg.value = document.getElementById("first").innerText;

// Step 7: Get class attribute
msg.value = "My class is " + msg.getAttribute("class");

// Step 8: Select elements by tag name
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

// Step 9: Select all span elements
elem = document.getElementsByTagName("span");
for (i = 0; i < elem.length; i++) {
    document.getElementById("msgArea").value +=
        "\n" + elem[i].innerText;
}

// Step 10: Select elements by class name
document.getElementById("msgArea").value = "";
var counts = document.getElementsByClassName("count-number");

for (i = 0; i < counts.length; i++) {
    document.getElementById("msgArea").value +=
        "\n" + counts[i].innerText;
}

// Step 11: Select first paragraph
var ps = document.querySelector("#first p");
document.getElementById("msgArea").value = ps.innerHTML;

// Step 12: Select all paragraphs
ps = document.querySelectorAll("#first p");

for (i = 0; i < ps.length; i++) {
    document.getElementById("msgArea").value +=
        ps[i].innerHTML + "\n";
}

// Step 13: Hide textarea
document.getElementById("msgArea").setAttribute("class", "hidden");

// Step 14: Change features background color
document.getElementById("features").style.backgroundColor = "green";
