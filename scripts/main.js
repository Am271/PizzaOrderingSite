document.getElementById("delivery").addEventListener("click", function() {showTab(1);});
document.getElementById("takeaway").addEventListener("click", function() {showTab(0);});
// #floating-window
function showTab(j) {
    if(j) {
        document.getElementById("addressdata").style.display = "block"; //delivery tab is highlighted
        // document.getElementById("delivery").style.border = "2px solid #ffb14d";
        document.getElementById("takeaway").style.border = "none";
        document.getElementById("floating-window").style.backgroundColor = "whitesmoke";
        document.getElementById("delivery").style.color = "#ffbb45";
        document.getElementById("takeaway").style.color = "#ffbb45";
        var inp = document.getElementsByClassName("inp");
        for(var i = 0;i < inp.length; i++) {
            inp[i].style.color = "#ffbb45";
            inp[i].style.borderBottom = "2px solid #ffbb45";
        }
        document.getElementById("addressdata").style.color = "#ffbb45";
        document.getElementById("order").style.backgroundColor = "#ffbb45";
    }
    else {
        document.getElementById("addressdata").style.display = "none"; //takeaway tab is highlighted
        // document.getElementById("takeaway").style.border = "2px solid #ffb14d";
        document.getElementById("delivery").style.border = "none";
        document.getElementById("floating-window").style.backgroundColor = "#ffbb45";
        document.getElementById("delivery").style.color = "whitesmoke";
        document.getElementById("takeaway").style.color = "whitesmoke";
        var inp = document.getElementsByClassName("inp");
        for(var i = 0;i < inp.length; i++) {
            inp[i].style.color = "whitesmoke";
            inp[i].style.borderBottom = "2px solid whitesmoke";
        }
        document.getElementById("addressdata").style.color = "whitesmoke";
        document.getElementById("order").style.backgroundColor = "whitesmoke";
    }
}