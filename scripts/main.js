var content=document.getElementById('content');
var bgcolor1 = getComputedStyle(document.querySelector('.tab1'))['backgroundColor'];
var bgcolor2= getComputedStyle(document.querySelector('.tab2'))['backgroundColor'];
document.getElementById("delivery").addEventListener("click", function() {showTab(bgcolor1, 'flex')});
document.getElementById("takeaway").addEventListener("click", function() {showTab(bgcolor2, 'none')});

function showTab(color, dispAttr) {
    document.getElementById('content').style['backgroundColor'] = color;
    document.getElementById('addressholder').style['display'] = dispAttr;
}