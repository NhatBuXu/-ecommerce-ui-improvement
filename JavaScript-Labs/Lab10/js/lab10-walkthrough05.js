
/*
==================================================
EXERCISE 10.5 - INSERTING DOM ELEMENTS
==================================================

Step 2: Insert after panel
panel.after(img);

Step 3: Insert before panel
panel.before(img);

Step 4: Append inside panel
panel.append(img);

Step 5: Prepend inside panel
panel.prepend(img);

Step 6: Alternative appendTo
img.appendTo(panel);

Step 7: Alternative prependTo
img.prependTo(panel);

Step 8: Insert before panel
img.insertBefore(panel);

==================================================
FINAL COMBINED CODE
==================================================
*/

$(function () {

    // Create a new DOM element using the original image
    var img = $('<img src="images/art/thumbs/13030.jpg">');

    // Select the existing panel
    var panel = $('.panel');

    // Insert image before the panel
    img.insertBefore(panel);

});
