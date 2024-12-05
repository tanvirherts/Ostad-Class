const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const tasklist = document.getElementById("tasklist");

console.log(input);

//Initialize an array to store task
let tasks = [];
let editIndex = null;

function renderTasks()
{
    tasklist.innerHTML = "";

    tasks.forEach((item, index) => {
        //Create task item
        const taskItem = document.createElement("div");
        taskItem.className = "d-flex justify-content-between align-items-center mt-3 border p-2 rounded";

        //Create task text
        const taskText = document.createElement("span");
        taskItem.textContent = item;

        //Action buttons
        const actions = document.createElement("div");

        //Edit button
        const editBtn = document.createElement("button");
        editBtn.className = "btn btn-warning btn-sm me-2";
        editBtn.textContent = "Edit";
        editBtn.onclick = () => handleEdit(index);

        //Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => handleDelete(index);

        //Append Actions
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        //Append text and actions to task item
        taskItem.appendChild(taskText);
        taskItem.appendChild(actions);

        //Add task item to task list
        tasklist.appendChild(taskItem);
    })
}

function handleAdd(){
    const taskValue = input.value.trim();

    if(!taskValue)
    {
        alert("Please enter a task!");
        return;
    }

    if(editIndex!==null)
    {
        //Update task if editing
        tasks[editIndex] = taskValue;
        editIndex = null;
        submitBtn.textContent = "Add Task";
    }
    else
    {
        //Add new task
        tasks.push(taskValue);
    }
    
    input.value = "";
    renderTasks();
}

function handleEdit(index)
{
    input.value = tasks[index];
    editIndex = index;
    submitBtn.textContent = "Update Task";
}

function handleDelete(index)
{
    const confirmDelete = confirm("Are you sure you want to delete this task?");

    if(confirmDelete)
    {
        tasks.splice(index, 1);
        renderTasks();
    }
}


submitBtn.addEventListener("click", handleAdd);