function question(){
alert ("Hello Tom, this is a very quick & basic quiz (Please only answer with yes or no, I'm not that skilled haha)");
var drink = prompt("Do you like beer?");
if (drink.toUpperCase()==="YES") {
    var beer = prompt("Fantastic! Me too! How about we meet for one, or two..?");
    if (beer.toUpperCase()==="YES") {
        alert("Great to hear. Now please tell me the good news on Bumble ;)")
    }
    else alert("Thats unfortunate but okay! Can I still win the one-on-one coaching session? :)");
}
else var wine = prompt("Perhaps somethine else then? Wine? Weed?");
        if(wine.toUpperCase()==="YES"){
            alert ("Great, it's a date then! Let me know if next week works");
        }
        else alert("Thats unfortunate but okay! Can I still win the one-on-one coaching session? :)");
}