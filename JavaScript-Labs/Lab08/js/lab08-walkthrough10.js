
/*
==================================================
EXERCISE 8.10 - USING OBJECTS
==================================================

STEP 1: Create an object using new Object()

var order = new Object();

order.product = "Self Portrait in a Straw Hat";
order.price = 15.0;
order.quantity = 2;
order.total = function() {
    return this.price * this.quantity;
};

document.write("Product=" + order.product);
document.write("<br>Price=" + order.price);
document.write("<br>Quantity=" + order.quantity);
document.write("<br>Total=" + order.total());


STEP 3: Access the function without executing it

document.write("<br>Total=" + order.total);


STEP 4: Define an empty object using {}

var order = {};


STEP 5: Define object properties using Bracket Notation

order["product"] = "Self Portrait in a Straw Hat";
order["price"] = 15.0;
order["quantity"] = 2;
order["total"] = function() {
    return this.price * this.quantity;
};


STEP 6: Define object using Object Literal Notation

var order = {
    product: "Self Portrait in a Straw Hat",
    price: 15.0,
    quantity: 2,
    total: function() {
        return this.price * this.quantity;
    }
};


STEP 7: Create a Constructor Function

function order(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.total = function() {
        return this.price * this.quantity;
    };
}


STEP 8: Create two object instances

var example1 = new order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new order("Untitled #23", 10, 4);


STEP 9: Display the two object instances

document.write("<p>Product=" + example1.product);
document.write("<br>Price=" + example1.price);
document.write("<br>Quantity=" + example1.quantity);
document.write("<br>Total=" + example1.total());

document.write("<p>Product=" + example2.product);
document.write("<br>Price=" + example2.price);
document.write("<br>Quantity=" + example2.quantity);
document.write("<br>Total=" + example2.total());

==================================================
STEP 10: Add an output() method to the constructor
==================================================
*/

// STEP 10: Constructor Function with total() and output()

function order(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;

    this.total = function() {
        return this.price * this.quantity;
    },

    this.output = function() {
        document.write("<p>Product=" + this.product);
        document.write("<br>Price=" + this.price);
        document.write("<br>Quantity=" + this.quantity);
        document.write("<br>Total=" + this.total());
    };
}

/*
==================================================
STEP 11: Create two instances and call output()
==================================================
*/

// Create two object instances
var example1 = new order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new order("Untitled #23", 10, 4);

// Display the output of each object
example1.output();
example2.output();
