
// Exercise 10.2 - Basic Selectors

// Step 2: Select the textarea and set its value
var msg = $('#msgArea');
msg.val("here is some new text");

// Step 3: Change the HTML content of the first element
$('#first').html("new Title");

// Step 4: Get the class attribute and set the textarea value
$('#msgArea').val("My class is " + $('#msgArea').attr("class"));

// Step 5: Select all buttons and change their background color
var buttons = $('button');
buttons.css('background-color', 'red');

// Step 6: Select the body and change its background color
var temp = $('body');
temp.css("background-color", "ivory");

// Step 7: Add the selected class to all center-icons elements
$('.center-icons').addClass('selected');


