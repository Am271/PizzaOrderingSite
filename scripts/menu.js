var content=document.getElementById('content');
var menuData= '<table border="border"><tr><th rowspan="2">Pizza name</th><th colspan="3">Price</th></tr><tr><th>Regular</th><th>Medium</th><th>Large</th></tr><tr><td>Margheretta</td><td>99</td><td>199</td><td>395</td></tr><tr><td>Farmhouse</td><td>215</td><td>395</td><td>595</td></tr><tr><td>veggie Paradise</td><td>215</td><td>395</td><td>595</td></tr></table>'

function showmenu(){
    content.innerHTML=menuData;
}
