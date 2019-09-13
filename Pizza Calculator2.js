//prijzen van de grotes pizza moeten small:7 medium:9 Large:11 worden hoe geen idee xD
var small = 5
var medium = 7
var large = 11
var berekening = 0

var ask = prompt("wilt u een pizza bestellen?")
if (ask == "nee") {
    exit;
}
var kind = prompt("welke soort pizza wilt u?");
var size = prompt("hoe groot moet de pizza small, medium of large?");
var number = prompt("hoeveel pizza's wilt u?");
if (size == "small"){
    prijs = small * number
} else if (size == "medium"){
    prijs = medium * number
} else if (size == "large"){
    prijs = large * number
} else {
    document.write("order not found please retry");
}
if (ask == "ja"){
    document.write(kind+" "+size+" "+number+"x<br>")
} 

var ask1 = prompt("wilt u nog een pizza bestellen?")
if (ask1 == "nee") {
    document.write("Totaal = €"+prijs)
    exit;
}

var kind1 = prompt("welke soort pizza wilt u?");
var size1 = prompt("hoe groot moet de pizza small, medium of large?");
var number1 = prompt("hoeveel pizza's wilt u?");

if (size1 == "small"){
    prijs1 = small * number1 + prijs
} else if (size1 == "medium"){
    prijs1 = medium * number1+prijs
} else if (size1 == "large"){
    prijs1 = large * number1+prijs
} else {
    document.write("order not found please retry");
}
if (ask1 == "ja"){
    document.write(kind1+" "+size1+" "+number1+"x<br>")
}

var ask2 = prompt("wilt u nog een pizza bestellen?")
if (ask2 == "nee") {
    document.write("Totaal = €"+prijs1)
    exit;
}

var kind2 = prompt("welke soort pizza wilt u?");
var size2 = prompt("hoe groot moet de pizza small, medium of large?");
var number2 = prompt("hoeveel pizza's wilt u?");

if (size2 == "small"){
    prijs2 = small * number2+prijs1
} else if (size2 == "medium"){
    prijs2 = medium * number2+prijs1
} else if (size2 == "large"){
    prijs2 = large * number2+prijs1
} else {
    document.write("order not found please retry");
}
if (ask2 == "ja"){
    document.write(kind2+" "+size2+" "+number2+"x<br>")
}

var ask3 = prompt("wilt u nog een pizza bestellen?")
if (ask3 == "nee") {
    document.write("Totaal = €"+prijs2)
    exit;
}

var kind3 = prompt("welke soort pizza wilt u?");
var size3 = prompt("hoe groot moet de pizza small, medium of large?");
var number3 = prompt("hoeveel pizza's wilt u?");

if (size3 == "small"){
    prijs3 = small * number3+prijs2
} else if (size3 == "medium"){
    prijs3 = medium * number3+prijs2
} else if (size3 == "large"){
    prijs3 = large * number3+prijs2
} else {
    document.write("order not found please retry");
}
if (ask3 == "ja"){
    document.write(kind3+" "+size3+" "+number3+"x<br>")
}

var ask4 = prompt("wilt u nog een pizza bestellen?")
if (ask4 == "nee") {
    document.write("Totaal = €"+prijs3)
    exit;
}

var kind4 = prompt("welke soort pizza wilt u?");
var size4 = prompt("hoe groot moet de pizza small, medium of large?");
var number4 = prompt("hoeveel pizza's wilt u?");

if (size4 == "small"){
    prijs4 = small * number4+prijs1
} else if (size4 == "medium"){
    prijs4 = medium * number4+prijs1
} else if (size4 == "large"){
    prijs4 = large * number4+prijs1
} else {
    document.write("order not found please retry");
}
if (ask4 == "ja"){
    document.write(kind4+" "+size4+" "+number4+"x<br>")
}