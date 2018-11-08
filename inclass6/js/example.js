// ADD NEW ITEM TO END OF LIST
var eol = document.createElement("LI");
var end_node = document.createTextNode("cream");

eol.appendChild(end_node);

document.getElementById("page").appendChild(eol);

// ADD NEW ITEM START OF LIST
var sol = document.createElement("LI");
var start_node = document.createTextNode("kale");

sol.appendChild(start_node);

document.getElementById("page").insertBefore(sol, document.getElementById("page").childNodes[4]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
document.getElementsByTagName("LI")[0].className = "cool";
document.getElementsByTagName("LI")[1].className = "cool";
document.getElementsByTagName("LI")[2].className = "cool";
document.getElementsByTagName("LI")[3].className = "cool";
document.getElementsByTagName("LI")[4].className = "cool";
document.getElementsByTagName("LI")[5].className = "cool";


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
document.getElementsByTagName("H2")[0].innerHTML = "Buy groceries (" + (document.querySelectorAll("LI").length) + ")";
