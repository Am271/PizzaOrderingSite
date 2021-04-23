document.getElementById("delivery").addEventListener("click", delivery_highlight);
document.getElementById("takeaway").addEventListener("click", takeaway_highlight);

function delivery_highlight() {
    var bgcolor = getComputedStyle(document.querySelector('.tab1'))['backgroundColor'];
    document.getElementsByClassName("content-wrapper")[0].style['backgroundColor'] = bgcolor;
}

function takeaway_highlight() {
    var bgcolor = getComputedStyle(document.querySelector('.tab2'))['backgroundColor'];
    document.getElementsByClassName("content-wrapper")[0].style['backgroundColor'] = bgcolor;
}