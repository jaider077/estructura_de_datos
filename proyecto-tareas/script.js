document.getElementById("taskForm").addEventListener("submit", function(e) {
e.preventDefault();

const taskInput = document.getElementById("taskInput");
const taskText = taskInput.value.trim();

if (taskText !== "") {
addTask(taskText);
taskInput.value = "";
}
});

function addTask(taskText) {
const taskList = document.getElementById("taskList");
const taskItem = document.createElement("li");

taskItem.innerHTML = `${taskText} <button onclick="deleteTrash(this)">Eliminar</button>`;
taskList.appendChild(taskItem);

updateTaskCounter();
}

function deleteTask(button) {
const taskItem = button.parentElement;
taskItem.remove();

updateTaskCounter();
}

function updateTaskCounter() {
const taskList = document.getElementById("taskList");
const taskCount = taskList.children.length;
document.getElementById("taskCounter").textContent = `Tareas Pendientes: ${taskCount}`;
}