document.getElementById("delivery").addEventListener("click", function() {showTab(1);});
document.getElementById("takeaway").addEventListener("click", function() {showTab(0);});
// #floating-window
/* color: seashell; */
	/* border: none;
	border-bottom: 2px solid #60f542;	
	outline: none;
	background-color: inherit; */
// var ele = document.getElementsByTagName("input");
// for(var i = 0; i < ele.length; i++) {
//     ele.style.setProperty('--border', "none");
//     ele.style.setProperty('--border-bottom', "2px solid #60f542");
//     ele.style.setProperty('--outline', "none");
//     ele.style.setProperty('--bgcolor', "inherit");
// }
style.setProperty('--scrollbar-background', localStorage.getItem("Color"));
function showTab(j) {
    if(j) {
        document.getElementById("addressdata").style.display = "block"; //delivery tab is highlighted
        // document.getElementById("delivery").style.border = "2px solid #ffb14d";
        // document.getElementById("delivery-img").style.content = "url('images/delivery.png')";
        // document.getElementById("takeaway-img").style.content = "url('images/takeawaywhite.png')";
        document.getElementById("takeaway").style.border = "none";
        document.getElementById("floating-window").style.backgroundColor = "whitesmoke";
        document.getElementById("floating-window").style.transition = "1s";
        // document.getElementById("delivery").style.color = "whitesmoke";
        // document.getElementById("takeaway").style.color = "#ffbb45";
        // document.getElementById("delivery").style.backgroundColor = "#ffbb45";
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
        // document.getElementById("takeaway").style.border = "2px solid #ffb14d";
        // document.getElementById("delivery-img").style.content = "url('images/delivery.png')";
        // document.getElementById("takeaway-img").style.content = "url('images/takeawaywhite.png')";
        document.getElementById("delivery").style.border = "none";
        document.getElementById("floating-window").style.backgroundColor = "#ffbb45";
        document.getElementById("floating-window").style.transition = "1s";
        // document.getElementById("delivery").style.color = "whitesmoke";
        // document.getElementById("takeaway").style.color = "whitesmoke";
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