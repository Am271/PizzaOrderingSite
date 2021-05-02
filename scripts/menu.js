function addOnclick(ele, size) {
    for(var i = 0; i < ele.length; i++) {
        ele[i].addEventListener("click", function() {addOrder(this.parentElement.textContent.split("\n")[1].trim(), size, this)});
    }
}

function addOnClick2(ele, size) {
    for(var i = 0; i < ele.length; i++) {
        ele[i].addEventListener("click", function() {addOrder(this.textContent.trim(), size, this);});
    }
}

var reg = document.getElementsByClassName("regular");
var med = document.getElementsByClassName("medium");
var lar = document.getElementsByClassName("large");
var pizza = document.getElementsByClassName("pizza");
var pasta = document.getElementsByClassName("pasta");
var dessert = document.getElementsByClassName("dessert");
var starter = document.getElementsByClassName("starter");
var beverage = document.getElementsByClassName("beverage");

addOnclick(reg, "Regular");
addOnclick(med, "Medium");
addOnclick(lar, "Large");
addOnClick2(pizza, "Medium");
addOnClick2(pasta, "None");
addOnClick2(dessert, "None");
addOnClick2(starter, "None");
addOnClick2(beverage, "None");

function addOrder(item, size, ele) {
    var baseText = "Added " + item
    var price = 0
    switch(ele.className) {
        case "regular": case "medium": case "large":
            price = ele.textContent
            orderText = baseText + " (" + size + ")";
            break;
        case "pizza":
            price = ele.parentElement.textContent.split("\n")[3]
            orderText = baseText + " (" + size + ")";
            break;
        case "pasta": case "dessert": case "starter": case "beverage":
            price = ele.nextElementSibling.textContent
            orderText = baseText;
            break;
    }
    document.getElementById("orders").innerHTML += orderText + "<br>";
    document.getElementById("orderprice").innerHTML += price + "<br>";
}