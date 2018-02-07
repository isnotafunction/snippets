var plus = document.querySelector(".plus");
var parent = document.querySelector(".container");
var x = document.querySelector(".x")
var clear = document.querySelector('.clear')

var data = (localStorage.getItem("item")) ? JSON.parse(localStorage.getItem("item")):[]

console.log(data)

renderDivs()

plus.addEventListener("click", createCard)

//deleting from the storage
parent.addEventListener("click", function(e){
  if(e.target.matches("button.x")){
  // var element = e.path[1].firstElementChild.innerText
  var uid = e.path[1].firstElementChild.id;
  console.log("this is uid "+ uid)
  var index = data.findIndex(x => x.id == uid)
  console.log("index to delete "+ index)
  var splicedEle = data.splice(index, 1)
  console.log("splicedElement " + splicedEle)
  updateStorage()
  console.log(data)
 }
})

var uid = (localStorage.getItem("uid"))? JSON.parse(localStorage.getItem("uid")): 0

function createCard(){
  uid++
  var card = document.createElement("div")
  var content = document.createElement("textarea")
  var xButton = document.createElement("button")
  card.setAttribute("class","card")
  content.setAttribute("class", "content")
  content.setAttribute("id", `u${uid}`)
  content.setAttribute("value", "")
  content.setAttribute("placeholder", "my snippets...")
  xButton.setAttribute("class", "x")
  xButton.setAttribute("onClick", "this.parentNode.parentNode.removeChild(this.parentNode)")
  xButton.innerText = "x"
  card.appendChild(content)
  card.appendChild(xButton)
  parent.appendChild(card)
  localStorage.setItem("uid", JSON.stringify(uid))
 }

parent.addEventListener("keyup", saveEdits)

var timeout;
//save edits to array and update storage
function saveEdits(e) {
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      var text = e.target.value
      console.log(e.target.value)
      var uid = e.target.id
      console.log(e.target.id)
      var index = data.findIndex(x => x.id == uid)
      if(index == -1){
          data.push({"text":text.trim(), "id": uid});
      } else {
        data[index] = {"text":text.trim(), "id": uid}
      }
     console.log(data)
      updateStorage()
    }, 4000)
  }

//save to localStorage
function updateStorage(){
  localStorage.setItem("item", JSON.stringify(data))
}

//render HTML from localStorage
function renderDivs(){
  if (!data.length){return}
  for(var i=0; i<data.length;i++){
    var textToInsert = data[i].text;
    var cardToRender =
    `<div class="card">
      <textarea class="content" value="${textToInsert}" id="${data[i].id}"> ${textToInsert}</textarea>
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
