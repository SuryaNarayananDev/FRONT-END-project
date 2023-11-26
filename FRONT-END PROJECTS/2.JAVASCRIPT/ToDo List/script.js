var desider
function popupint(x){
  document.getElementById("show").style.display="block"
  desider =x;
}

function closediv()
{
  document.getElementById("show").style.display="none"
  desider = 0;
}

function adder()
{
  console.log(desider)
  var inputs = document.getElementById("editer")
  var b1 
  var b2
  switch(desider)
  {
    case 1 :  document.getElementById("head").textContent=inputs.value ; break;
    case 2 :  document.getElementById("quotes").textContent=inputs.value ; break;3
  }
}
var ul=document.getElementById("container")
var input=document.getElementById("input")
var count=1
function add(){
  if(count<12)
  {
    var list=document.createElement("li")
    list.innerHTML="<div id='listofitems'><div class='forinput'><h2 id='text'>"+count+"."+input.value+"</h2></div><button onclick='removeitem(event)' id=\"remove\">X</button><button ondblclick='removehi(event)' onclick='hightlight(event)' id='remove'>#</button></div>"
    ul.append(list)
    count++
    console.log(count)
  }
}
var text=document.getElementById("text")
function removeitem(event)
{
  event.target.parentElement.remove()
  count--
}

function hightlight(event)
{
  event.target.parentElement.style.color="Yellow"
}
function removehi(event)
{
  event.target.parentElement.style.color="white"
}