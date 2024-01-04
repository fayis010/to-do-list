function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      alert("Please enter a task!");
      return;
    }
  
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value));
  
    var deleteButton = document.createElement("span");
    deleteButton.appendChild(document.createTextNode("x"));
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
      taskList.removeChild(li);
    };
    li.appendChild(deleteButton);
  
    taskList.appendChild(li);
    taskInput.value = "";
  }