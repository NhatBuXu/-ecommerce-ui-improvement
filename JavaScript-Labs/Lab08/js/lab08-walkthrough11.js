
/*
==================================================
EXERCISE 8.11 - ARRAYS OF OBJECTS
==================================================

STEP 1: Iterate through the array using dot notation

for (i = 0; i < countries.length; i++) {
    document.write(countries[i].name);
    document.write("<br>");
}


STEP 2: Use a temporary object variable

for (i = 0; i < countries.length; i++) {
    var c = countries[i];
    document.write(c.name);
    document.write("<br>");
}


STEP 3: Access object properties using bracket notation

for (i = 0; i < countries.length; i++) {
    var c = countries[i];
    document.write(c["name"]);
    document.write("<br>");
}


STEP 4: Use a variable to access an object property

for (i = 0; i < countries.length; i++) {
    var c = countries[i];
    var temp = "name";
    document.write(c[temp]);
    document.write("<br>");
}


STEP 5: Iterate through object properties using for...in
and display country flags and all object properties.

==================================================
*/

// Define constructor function for Country objects
function Country(name, iso, capital, population) {
    this.name = name;
    this.iso = iso;
    this.capital = capital;
    this.population = population;
}

// Create an array of country objects
var countries = [
    new Country("Bahamas", "BS", "Nassau", 301790),
    new Country("Canada", "CA", "Ottawa", 33679000),
    new Country("Germany", "DE", "Berlin", 81802257)
];

// Add more country objects to the array
countries.push(new Country("Spain", "ES", "Madrid", 46505963));
countries.push(new Country("United Kingdom", "GB", "London", 62348447));

// STEP 5: Display all countries and their properties

for (i = 0; i < countries.length; i++) {
    var c = countries[i];

    document.write("<div class='box'>");

    document.write("<img src='flags/" + c.iso + ".png' class='boxImg'>");

    for (var propertyName in c) {
        document.write("<strong>");
        document.write(propertyName + ": ");
        document.write("</strong>");

        document.write(c[propertyName]);
        document.write("<br>");
    }

    document.write("</div>");
}
