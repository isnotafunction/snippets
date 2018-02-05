var plus = document.querySelector(".plus");
var parent = document.querySelector(".container");
var x = document.querySelector(".x")
var clear = document.querySelector('.clear')

var data = (localStorage.getItem("item")) ? JSON.parse(localStorage.getItem("item")):{
  text:[]
}

console.log(data.text)

renderDivs()

plus.addEventListener("click", function(){
  createCard();
})

parent.addEventListener("click", function(e){
  if(e.target.matches("button.x")){
    console.log(e.target)
  var element = e.path[1].firstElementChild.innerText
  console.log(element)
  console.log(typeof(element))
  var index = data.text.indexOf(element.trim())
  console.log(index)
  var splicedEle = data.text.splice(index, 1)
  console.log(splicedEle)
  updateStorage()
  console.log(data.text)
 }
})


function createCard(){
  var card = document.createElement("div")
  var content = document.createElement("p")
  var xButton = document.createElement("button")
  card.setAttribute("class","card")
  content.setAttribute("contenteditable", "true")
  content.setAttribute("id", "content")
  content.innerText = "snippets..."
  xButton.setAttribute("class", "x")
  xButton.setAttribute("onClick", "this.parentNode.parentNode.removeChild(this.parentNode)")
  xButton.innerText = "x"
  card.appendChild(content)
  card.appendChild(xButton)
  parent.appendChild(card)
 }

parent.addEventListener("keyup", saveEdits)

var timeout;
//save edits to object
function saveEdits(e) {
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      var text = e.target.innerText;
      data.text.push(text.trim());
      updateStorage()
    }, 5000)
  }

//save to localStorage
function updateStorage(){
  localStorage.setItem("item", JSON.stringify(data))
}

//render HTML from localStorage
function renderDivs(){
  if (!data.text.length){return}
  for(var i=0; i<data.text.length;i++){
    var textToInsert = data.text[i];
    var cardToRender =
    `<div class="card">
      <p id="content" contenteditable="true" > ${textToInsert}</p>
      <button class="x" onClick="this.parentNode.parentNode.removeChild(this.parentNode)">x</button>
    </div>
    `
    parent.insertAdjacentHTML("beforeend", cardToRender)
  }
}

// clear localStorage and refresh
clear.addEventListener("click", function(){
  window.localStorage.clear()
  document.location.reload(true)
})
