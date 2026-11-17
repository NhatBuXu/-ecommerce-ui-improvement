
/*
==================================================
EXERCISE 10.4 - JQUERY LISTENERS
==================================================

Step 2: Click shortcut

$(".panel").click(function() {
    $("#message").html("You clicked in the panel");
});

Step 3: Use on()

$(".panel").on("click", function() {
    $("#message").html("You clicked in the panel");
});

Step 4: Document ready

$(function () {
    $(".panel").on("click", function() {
        $("#message").html("You clicked in the panel");
    });
});

Step 5: Chain multiple event handlers

==================================================
FINAL COMBINED CODE
==================================================
*/

$(function () {

    // Mouse move event
    $(".panel")
        .on("mousemove", function (e) {
            $("#message").html("x=" + e.pageX + " y=" + e.pageY);
        })

        // Mouse leave event
        .on("mouseleave", function (e) {
            $("#message").html("goodbye!");
        })

        // Click event
        .on("click", function () {
            $("#message").html("stopped move reporting");

            // Turn off mousemove event
            $(".panel").off("mousemove");
        });

});
