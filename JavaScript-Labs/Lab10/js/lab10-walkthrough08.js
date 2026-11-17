
/*
==================================================
EXERCISE 10.8 - COMPLEX ANIMATIONS
==================================================

Step 2: Animate left property

$("#box").animate({left: '495px'});

Step 3: Animate left, opacity and height

$("#box").animate({
    left: '495px',
    opacity: '1',
    height: '50px'
});

Step 4: Chain multiple animations

==================================================
FINAL COMBINED CODE
==================================================
*/

$(function() {

    $("button").click(function() {

        $("#box")
            .animate({
                left: '495px',
                opacity: '1',
                height: '50px'
            })
            .animate({
                top: '400px',
                opacity: '0.2'
            })
            .animate({
                height: '200px'
            }, 2000);

    });

});
