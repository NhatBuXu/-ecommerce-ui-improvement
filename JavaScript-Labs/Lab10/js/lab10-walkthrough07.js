
/*
==================================================
EXERCISE 10.7 - MORE JQUERY ANIMATION
==================================================

Step 2: Create image preview on mouseover

Step 3: Create removePreview() and movePreview()

Step 4: Add mouseleave and mousemove event triggers

==================================================
FINAL COMBINED CODE
==================================================
*/

// Remove preview and restore original image
function removePreview() {

    // Remove gray class from image
    $(this).removeClass("gray");

    // Remove dynamic preview element
    $("#preview").remove();
}

// Move preview based on mouse coordinates
function movePreview(e) {

    $("#preview")
        .css("top", (e.pageY - 10) + "px")
        .css("left", (e.pageX + 30) + "px");
}

$(function () {

    // Create preview when mouse moves over image
    $('figure img').on('mouseover', function (e) {

        // Construct preview filename based on existing image
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace("small", "medium");

        // Create dynamic preview element
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');

        preview.append(image);
        preview.append(caption);

        // Add preview to body
        $('body').append(preview);

        // Make small image gray
        $(this).addClass("gray");

        // Fade preview in
        $("#preview").fadeIn(1000);
    });

    // Remove preview when mouse leaves image
    $("figure img").on("mouseleave", removePreview);

    // Move preview with mouse
    $("figure img").on("mousemove", movePreview);

});
