
/*
==================================================
EXERCISE 10.3 - ADVANCED SELECTORS
==================================================

Step 2: Select password fields

$(':password').css('background-color', 'yellow');

Step 3: Comment out the password selector.

Step 4: Select every fourth child element inside form

$('form :nth-child(4n)').css('background-color', 'yellow');

Step 5: Select labels containing the word "word"

$('label:contains("word")').css("color", "black");

==================================================
FINAL COMBINED CODE
==================================================
*/

// Step 2: Password selector (commented out as required)
/*
$(':password').css('background-color', 'yellow');
*/

// Step 4: Select every fourth child element inside form
$('form :nth-child(4n)').css('background-color', 'yellow');

// Step 5: Select labels containing the word "word"
$('label:contains("word")').css("color", "black");
