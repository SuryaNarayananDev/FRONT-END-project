function popupfun(){
    document.getElementById("overlay").style.display="block"
    document.getElementById("popup-box").style.display="block"
}

function cancel(){
    document.getElementById("overlay").style.display="none"
    document.getElementById("popup-box").style.display="none"
}

var container=document.getElementById("container")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var textareablock=document.getElementById("textarea-pop")
function inputsaver(event)
{
    event.preventDefault()
    var Div=document.createElement("div")
    Div.setAttribute("class","book-container")
    Div.innerHTML=`<h2>${booktitle.value}</h2>
    <h3>${bookauthor.value}</h3>
    <p>${textareablock.value}</p>
    <button onclick="remove(event)" id="delete">Delete</button>`
    console.log("addeds")
    container.append(Div)
    cancel()
    normalize()
}
function normalize()
{
    booktitle.value=""
    bookauthor.value=""
    textareablock.value=""

}

function remove(event)
{
    event.target.parentElement.remove()
}