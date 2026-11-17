
/*
==================================================
EXERCISE 10.6 - SIMPLE JQUERY ANIMATION
==================================================

Step 2: Fade In
$("#btnFadeIn").click(function() {
    $("figure").fadeIn(1000);
});

Step 3: Fade Out
$("#btnFadeOut").click(function() {
    $("figure").fadeOut(1000);
});

Step 4: Toggle Fade
$("#btnFade").click(function() {
    $("figure").fadeToggle(500);
});

Step 5: Slide Down, Slide Up and Slide Toggle

==================================================
FINAL COMBINED CODE
==================================================
*/

$(function() {

    // Fade In
    $("#btnFadeIn").click(function() {
        $("figure").fadeIn(1000);
    });

    // Fade Out
    $("#btnFadeOut").click(function() {
        $("figure").fadeOut(1000);
    });

    // Toggle Fade
    $("#btnFade").click(function() {
        $("figure").fadeToggle(500);
    });

    // Slide Down
    $("#btnSlideDown").click(function() {
        $("figure").slideDown("slow");
    });

    // Slide Up
    $("#btnSlideUp").click(function() {
        $("figure").slideUp("slow");
    });

    // Toggle Slide
    $("#btnSlide").click(function() {
        $("figure").slideToggle(2000);
    });

});
