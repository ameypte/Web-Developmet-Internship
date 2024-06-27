var tasks = [];

function add(){
    let input = prompt("Enter your task");
    // console.log(input);
    tasks.push(input);    
    // console.log(tasks);
    updateToDo();
}

function updateToDo(){
    let taskList = document.getElementById("taskList");
    // console.log(tasks.innerHTML);
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        // console.log(tasks[i]);
        taskList.innerHTML = taskList.innerHTML + `<div class="bg-light-subtle p-3 rounded rounded-1 mb-2">
                    <div class="d-flex justify-content-between">
                        <h5>#Task ${i+1}</h5>
                        <div>
                            <button
                                type="button"
                                class="btn btn-primary btn-sm"
                                onclick="editTask(${i})"
                            >
                                Edit
                            </button>
                            <button type="button" class="btn btn-danger btn-sm" onclick="deleteTask(${i})">
                                Delete
                            </button>
                        </div>
                    </div>
                    <p>
                        ${tasks[i]}
                    </p>
                </div>`;
    }

}

function deleteTask(value){
    let isSure = confirm("Are you sure, Do you want to delete Task "+ (value+1) +"?");
   if (isSure){
       tasks.splice(value,1);
       updateToDo();
   }
}

function editTask(value){
    let input = prompt("Edit Task "+(value +1), tasks[value]);
    tasks[value] = input;
    updateToDo();
}
