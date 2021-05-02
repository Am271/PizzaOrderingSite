var j = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  j++;
  if (j > x.length) {j = 1}    
  x[j-1].style.display = "block";  
  setTimeout(carousel, 3000);
}