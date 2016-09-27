var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completeTaskHolder = document.getElementById("completed-tasks");


//New Task List Item
var createNewTaskElement = function(taskString) {
	var listItem = document.createElement("li");
	
	//create input, label
	var checkBox = document.createElement("input");
	var label = document.createElement("label");
	var editInput = document.createElement("input");
	//create .edit button
	var editButton = document.createElement("button");
	//create .delete button
	var deleteButton = document.createElement("button");
	
	//assign input types
	checkBox.type = "checkbox";
	editInput.type = "text";
	
	
	editButton.innerText ="Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";
	
	label.innerText = taskString;
	
	//Append New Elements
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	
	return listItem;
	
	
}

// add a new task
var addTask = function() {
	console.log("Add task...");
	//create new list item task on button press
	if (taskInput.value.length !== 0) {
	var listItem = createNewTaskElement(taskInput.value);
	
	
	//Append to incomplete task
	incompleteTaskHolder.appendChild(listItem);
	bindEventTasks(listItem, taskCompleted);
	
	taskInput.value = "";
	} else {
		alert("You did not enter a task.");
	}
}


//Edit exiting task
var editTask = function(){
	console.log("Edit Task...");
	var listItem = this.parentNode;
	
	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");
	
	
	var containsClass = listItem.classList.contains("editMode");
	
	if (containsClass) {
		label.innerText = editInput.value;

	} else {
		editInput.value = label.innerText;
	}
	
	listItem.classList.toggle("editMode");
	
	}

}


//Mark Task Complete
var taskCompleted = function(){
	console.log("Complete Task...");
	var listItem = this.parentNode;
	completeTaskHolder.appendChild(listItem);
	bindEventTasks(listItem, incompleteTask);
}


//Mark task incomplete
var incompleteTask = function(){
	console.log("Incomplete Task...");
	
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindEventTasks(listItem, taskCompleted);
	
	}

	
	//Delete exisiting task
var deleteTask = function(){
	console.log("Delete Task...");
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	
	ul.removeChild(listItem);
	
}

var bindEventTasks = function(taskListItem, checkBoxEventHandler) {
	console.log("Bind Event Items...");
	var checkbox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
	checkbox.onchange = checkBoxEventHandler;
}


var ajaxRequest = function() {
	console.log("Ajax Reqeust");
}
//Add button functionality  onclick

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

//cycle over task list
for(var i=0; i < incompleteTaskHolder.children.length; i++) {
	bindEventTasks(incompleteTaskHolder.children[i], taskCompleted);
}

//cycle over task list
for(var i=0; i < completeTaskHolder.children.length; i++) {
	bindEventTasks(completeTaskHolder.children[i], incompleteTask);
}