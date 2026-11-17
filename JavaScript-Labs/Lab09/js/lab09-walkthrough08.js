
/*
==================================================
EXERCISE 9.8 - FORM VALIDATION
==================================================

Step 1: Initialize form event listener

function init() {
    document.getElementById("sampleForm").addEventListener(
        "submit", checkForEmptyFields
    );
}

window.addEventListener("load", init);

Step 2: Check for empty fields and display alert.

Step 3: Display validation errors inside the errors div.

==================================================
FINAL CODE
==================================================
*/

// Responsible for setting up event listeners on page
function init() {
    document.getElementById("sampleForm").addEventListener(
        "submit",
        checkForEmptyFields
    );
}

// Initialize handlers once page is ready
window.addEventListener("load", init);

// Ensures form fields are not empty
function checkForEmptyFields(e) {

    // Hide the error message element
    var errorArea = document.getElementById("errors");
    errorArea.className = "hidden";

    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    // Loop through the input elements looking for empty values
    var fieldList = [];

    for (i = 0; i < fields.length; i++) {

        if (fields[i].value == null || fields[i].value == "") {

            // Prevent form submission
            e.preventDefault();

            fieldList.push(fields[i]);
        }
    }

    // Set up the error message
    var msg = "The following fields can't be empty: ";

    if (fieldList.length > 0) {

        for (i = 0; i < fieldList.length; i++) {
            msg += fieldList[i].id + ",";
        }

        errorArea.innerHTML = "<p>" + msg + "</p>";
        errorArea.className = "visible";
    }
}


