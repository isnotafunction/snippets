var button = document.querySelector(".plus");
var parent = document.querySelector(".container");

button.addEventListener("click", function(){
  createCard();
})


function createCard(){
 var card =
 `<div class="card">
 <h4 contenteditable="true">Title</h4>
 <p class="text" contenteditable="true">Edit me...</p>
 <button class="x" onClick="this.parentNode.parentNode.removeChild(this.parentNode);">x</button>
 </div>`;
 parent.insertAdjacentHTML("beforeend", card);
}
