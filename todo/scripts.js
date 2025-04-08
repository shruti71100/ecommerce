function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.innerHTML = `${taskInput.value} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
