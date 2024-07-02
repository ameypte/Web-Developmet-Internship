var tasks = [];

// Check if there are tasks stored in local storage and load them
if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    updateToDo(); // Update the UI with tasks loaded from local storage
}

function add() {
    let input = prompt("Enter your task");
    if (input) { // Check if input is not empty
        tasks.push(input);
        updateToDo();
        saveTasksToLocalStorage();
    }
}

function updateToDo() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        taskList.innerHTML += `<div class="bg-light-subtle p-3 rounded rounded-1 mb-2">
            <div class="d-flex justify-content-between">
                <h5>#Task ${i+1}</h5>
                <div>
                    <button type="button" class="btn btn-primary btn-sm" onclick="editTask(${i})">Edit</button>
                    <button type="button" class="btn btn-danger btn-sm" onclick="deleteTask(${i})">Delete</button>
                </div>
            </div>
            <p>${tasks[i]}</p>
        </div>`;
    }
}

function deleteTask(value) {
    let isSure = confirm("Are you sure, Do you want to delete Task " + (value + 1) + "?");
    if (isSure) {
        tasks.splice(value, 1);
        updateToDo();
        saveTasksToLocalStorage();
    }
}

function editTask(value) {
    let input = prompt("Edit Task " + (value + 1), tasks[value]);
    if (input) { // Check if input is not empty
        tasks[value] = input;
        updateToDo();
        saveTasksToLocalStorage();
    }
}

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
