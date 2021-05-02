function addOnclick(ele, size) {
    for(var i = 0; i < ele.length; i++) {
        ele[i].addEventListener("click", function() {addOrder(this.parentElement.textContent.split("\n")[1].trim(), size)});
    }
}

function addOnClick2(ele, size) {
    for(var i = 0; i < ele.length; i++) {
        ele[i].addEventListener("click", function() {addOrder(this.textContent.trim(), size);});
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

function addOrder(item, size) {
    var orderText = "Added " + item
    if(size == "None") {
        document.getElementById("orders").innerHTML += orderText + "<br>"
    }
    else {
        document.getElementById("orders").innerHTML += orderText + "(" + size + ")" + "<br>"
    }
}