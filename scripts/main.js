var content=document.getElementById('content');
var menuData= '<table border="border"><tr><th rowspan="2">Pizza name</th><th colspan="3">Price</th></tr><tr><th>Regular</th><th>Medium</th><th>Large</th></tr><tr><td>P1</td><td>Pr1</td><td>Pr2</td><td>Pr3</td></tr><tr><td>P2</td><td>Pr1</td><td>Pr2</td><td>Pr3</td></tr></table>'
var orderData='<form action=""><label>Name:<input type="text" name="name" ></label> <label>contactNum<input type="text" name="phonenum"></label><label>Address<textarea rows="5" columns="25" name="address"></textarea></label><input type="submit" name="submit"></form>'
var takeawayData='<div id="content"><div class="nameholder"><div class="label" id="namelabel">Name</div><div id="input"><input type="text" id="data"></div></div><div class="nameholder"><div class="label" id="contactlabel">Contact</div><div id="input"><input type="text" id="data"></div></div><div class="nameholder"></div></div>'
function showMenu(){
    content.innerHTML=menuData;
}
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