/*
function message() 
{
    alert("You have Right Click a Paragraph!");
}

function message1() 
{
    alert("You have Right Click a Link!");
}
*/

function message() 
{
    alert("You have Move out to Paragraph!");
}

function message1() 
{
    alert("You have Move out to Link!");
}

function message2() 
{
    alert("You press any key in keyboard!");
}

function message3() 
{
    alert("You press and release any key in keyboard!");
}

function message4() 
{
    alert("You press key in keyboard!");
}

function submitMessage() 
{
    alert("Form Submitted!");
    document.getElementById("form").style.display = "none";
}
function loadMessage() 
{
    document.getElementById("form").style.display = "block";
}

function colorChange() 
{
    document.getElementById("this").style.backgroundColor = "Yellow";
}

/*
function windowResize() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    //var txt = "window size: width" + w + ", height: " + h;

    document.getElementById("here").style.width = w;
}
window.onresize = windowResize;
*/

function dailyMessage() {
    var now = new Date();
    var dateOfTheweek = now.getDay();

    if(dateOfTheweek == 0)
    {
        alert("Have a Bless Sunday!!!");
    }

    else if(dateOfTheweek == 1)
    {
        alert("Hayss, Monday na Naman!!!");
    }

    else if(dateOfTheweek == 2)
    {
        alert("Have a Good Tuesday!!!");
    }

    else if(dateOfTheweek == 3)
    {
        alert("Have a Beautiful day as Wednesday!!!");
    }

    else if(dateOfTheweek == 4)
    {
        alert("Have a Good Thursday!!!");
    }

    else if(dateOfTheweek == 5)
    {
        alert("Yes, Thank Goodness its Friday!!!");
    }

    else if(dateOfTheweek == 6)
    {
        alert("Saturday? Anime Day!!!");
    }

    else
    {
        alert("Have a Good Day!!!");
    }
}
