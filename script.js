var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listArray = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener("click",crossOutListElement)

	var button = document.createElement("button");
	button.appendChild(document.createTextNode("X"));
	button.classList.add("myButton")
	li.appendChild(button);	
	button.onclick=removeItemAfterClick;

	input.value = "";
}



function crossOutListElement(event) {
	event.target.classList.toggle("done");
}

function removeItemAfterClick(event) {
	event.target.parentNode.remove();
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



// for(i = 0; i < listArray.length; i++){
// 	listArray[i].addEventListener("click",crossOutListElement)
// }

// for(i = 0; i < listArray.length; i++){
// 	console.log(listArray[i])
// 	createButton(listArray[i]);
	//listArray[i].appendChild(createButton())
//}
// add listener to each in list
// for(i = 0; i < listArray.length; i++){
// 	listArray[i].addEventListener("click",function(){
// 		console.log("hi");
// 	})

// }


//try another way
// listArray.forEach(function(item){
// 	item.addEventListener("click",function(){
// 		console.log("hi");
// 	})
// })


