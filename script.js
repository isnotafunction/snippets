var plus = document.querySelector(".plus");
var parent = document.querySelector(".container");
// var clear  = document.querySelector(".clear");

plus.addEventListener("click", function(){
  createCard();
})


function createCard(){
  var card = document.createElement("div")
  var pre = document.createElement("pre")
  var content = document.createElement("code")
  var x = document.createElement("button")
  card.setAttribute("class","card")
  content.setAttribute("contenteditable", "true")
  content.setAttribute("id", "content")
  content.innerText = "code snippet..."
  x.setAttribute("class", "x")
  x.setAttribute("onClick", "this.parentNode.parentNode.removeChild(this.parentNode)")
  x.innerText = "x"
  card.appendChild(pre)
  pre.appendChild(content)
  card.appendChild(x)
  parent.appendChild(card)
 }



 // clear.addEventListener("click", function(){
 //   localStorage.clear();
 // })
