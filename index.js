// const taskList =[];
// const subTaskList = [];
// const addTask = () =>{
//    const name =document.getElementById("name").value;
// //    console.log(name);
// const temObj = {
//     id:Date.now(),
//     taskName:name
// }
// taskList.push(temObj)
// console.log(taskList);
// addTaskOnScreen();

// }

// function addTaskOnScreen(){
//     const element = document.createElement("div");
//     element.setAttribute("class","child");
//     const existingelement = document.getElementById("parent");
//     existingelement.appendChild(element)
//     const textContent = taskList[taskList.length-1].taskName;
//     element.innerHTML = textContent;
//     element.style.color = "red";
//     element.style.textAlign = "center";
//     // textContent.style.borderBottom = "#000";
//     // element.style.borderBottom = "#000";
// }
// document.getSelection()[0]
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("i");
  var txt = document.createTextNode("\ ");
  var addBtn = document.createElement("a");
  var textbtn = document.createTextNode("Add");
  addBtn.appendChild(textbtn);
  myNodelist[i].appendChild(addBtn);
  addBtn.className = "btn btn-danger";
  addBtn.innerText = "Add";
  addBtn.setAttribute("href","#");
  addBtn.setAttribute("style","position:absolute; left:218px; top:314px; background-color:red");
  span.className = "close fa fa-trash";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// click on a add button to hide the current list item
var addsub = document.getElementsByClassName("addSubBtn");
var i;
for(i = 0; i <addsub.length; i++){
  addsub[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var addBtnSub = document.getElementsByClassName("addBtnSub");
var i;
for (i = 0; i<addBtnSub.length; i++){
  addBtnSub[0].onclick = function(){
    var div = this.parentElement;
    div.style.display = "block";
  }
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var pTag =document.createElement("p");
  var subPtag = document.createElement("p");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  var inpuTex = li.appendChild(pTag)
  var addPTag = li.appendChild(subPtag);
  addPTag.setAttribute("style", "color:red");
  inpuTex.appendChild(t);
  inpuTex.setAttribute("style","position:relative; left:8px; border-bottom:2px solid red")
  // li.appendChild(span_2);
  addPTag.setAttribute("id", "subText");
  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
// close button
  var span = document.createElement("i");
  var txt = document.createTextNode("\ ");
  span.className = "close fa fa-trash";
  span.appendChild(txt);
  li.appendChild(span);
// add in card 
  var addBtn = document.createElement("a");
  var textbtn = document.createTextNode("Add");
  addBtn.className = "btn btn-danger";
  addBtn.setAttribute("href","#");
  addBtn.setAttribute("style","position:absolute; left:218px; top:314px; background-color:red");
  addBtn.appendChild(textbtn);
  addBtn.setAttribute("id", "subItemBtn");
  addBtn.setAttribute("data-bs-toggle", "modal");
  addBtn.setAttribute("data-bs-target", "#exampleModal_sub")
  li.appendChild(addBtn);


  
  // var list = document.createElement("li")

  // var addBTN = document.createElement("a");
  // var textbtn = Document.createTextNode("Add");
  // addBTN.className = "btn btn-danger rounded-1";
  // addBTN.appendChild(textbtn);
  // li.appendChild(addBTN);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

for(i = 0; i < addBtnSub.length; i++){
  addBtnSub[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "block";
  }
}
  
}
$(document).ready(function(){
  $("#btnSub").click(function(){
   var valueInpu = $("#mysubItemInput").val();
   document.getElementById("subText").innerHTML = valueInpu;
  })
})

// create list of subitems in cars when click on add

// function subItem(){
//   var li = document.createElement("li");
//   var pTag =document.createElement("div")
//   var mysubItemInput = document.getElementById("mysubItemInput").value;
//   var t = document.createTextNode(mysubItemInput);
//   var inpuTex = li.appendChild(pTag)
//   inpuTex.appendChild(t)

//    if (mysubItemInput === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("subText").appendChild(li);
//    }
//   document.getElementById("mysubItemInput").value = "";
// }
