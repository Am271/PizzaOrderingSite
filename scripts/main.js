var content=document.getElementById('content');
var orderData='<form action=""><label>Name:<input type="text" name="name" ></label> <label>contactNum<input type="text" name="phonenum"></label><label>Address<textarea rows="5" columns="25" name="address"></textarea></label><input type="submit" name="submit"></form>'
var takeawayData='<div id="content"><div class="nameholder"><div class="label" id="namelabel">Name</div><div id="input"><input type="text" id="data"></div></div><div class="nameholder"><div class="label" id="contactlabel">Contact</div><div id="input"><input type="text" id="data"></div></div><div class="nameholder"></div></div>'
content.innerHTML=orderData;
document.getElementById("delivery").addEventListener("click", showDelivery);
document.getElementById("takeaway").addEventListener("click", showTakeaway);

function showDelivery() {
    var bgcolor = getComputedStyle(document.querySelector('.tab1'))['backgroundColor'];
    document.getElementsByClassName("content-wrapper")[0].style['backgroundColor'] = bgcolor;
    content.innerHTML=orderData;
}

function showTakeaway() {
    var bgcolor = getComputedStyle(document.querySelector('.tab2'))['backgroundColor'];
    document.getElementsByClassName("content-wrapper")[0].style['backgroundColor'] = bgcolor;
    content.innerHTML=takeawayData;
}