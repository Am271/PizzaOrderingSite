document.getElementById("delivery").addEventListener("click", function() {showTab(1);});
document.getElementById("takeaway").addEventListener("click", function() {showTab(0);});
style.setProperty('--scrollbar-background', localStorage.getItem("Color"));
function showTab(j) {
    if(j) {
        document.getElementById("addressdata").style.display = "block"; //delivery tab is highlighted
        document.getElementById("takeaway").style.border = "none";
        document.getElementById("floating-window").style.backgroundColor = "whitesmoke";
        document.getElementById("floating-window").style.transition = "1s";
        var inp = document.getElementsByClassName("inp");
        for(var i = 0;i < inp.length; i++) {
            inp[i].style.color = "#ffbb45";
            inp[i].style.borderBottom = "2px solid #ffbb45";
        }
        document.getElementById("addressdata").style.color = "#ffbb45";
        document.getElementById("order").style.backgroundColor = "#ffbb45";
        document.getElementById("orderhref").style.color = "whitesmoke";
    }
    else {
        document.getElementById("addressdata").style.display = "none"; //takeaway tab is highlighted
        document.getElementById("delivery").style.border = "none";
        document.getElementById("floating-window").style.backgroundColor = "#ffbb45";
        document.getElementById("floating-window").style.transition = "1s";
        var inp = document.getElementsByClassName("inp");
        for(var i = 0;i < inp.length; i++) {
            inp[i].style.color = "whitesmoke";
            inp[i].style.borderBottom = "2px solid whitesmoke";
        }
        document.getElementById("addressdata").style.color = "whitesmoke";
        document.getElementById("order").style.backgroundColor = "whitesmoke";
        document.getElementById("orderhref").style.color = "#ffbb45";
    }
}