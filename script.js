var button = document.querySelector(".plus");
var x = document.querySelectorAll(".x");

var parent = document.querySelector(".container");

button.addEventListener("click", function(){
  createCard();
})


function createCard(){
 var card = `<div class="card"> <p>Hello World</p> <button class="x" onClick="this.parentNode.parentNode.removeChild(this.parentNode);">x</button></div>`;
 parent.insertAdjacentHTML("beforeend", card);
}
