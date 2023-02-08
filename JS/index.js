//var greetMessage = "Ohayou Sekai, I'm External Java Script!";

//var x = 5;
//var y = 10;

//var product = x * y;

//document.write(product);

//var name = "Shirra Kimberly", age = 22, isMarried = false;

//document.write("Name: " + name + ",  Age: " + age + ", Married: " + isMarried);

//const PI = 3.14;
//const PI = 5.14;

//console.log(PI);

/*
var a = "Let's have a cup of Coffee";
var b = "We said 'Hello' and left.";
var c = "'I'll', 'We' never Give Up!";

document.write(a + "<br>" + b + "<br>" + c);

document.write("<br>");
document.write("<br>");
document.write("<br>");


var a = 25;
var b = 80.5;
var c = 4.25e6;
var d = 4.25e-6;

document.write(a + "<br>" + b + "<br>" + c + "<br>"+ d);

document.write("<br>");
document.write("<br>");
document.write("<br>");


var me = "'First Name: Chistian Harris, Middle Name: Fernandez, Surname: Garcia' <br> 'First Name: Chistian Harris, Middle Name: Fernandez, Surname: Garcia'";

document.write(me);
*/

var total_priceDisplay = function(){

    var total_priceDollars = document.getElementById("pieces").value * 2;

    return alert("Total Price of Item: $" +total_priceDollars);
}