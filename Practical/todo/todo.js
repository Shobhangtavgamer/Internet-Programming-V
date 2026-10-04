"use strict";
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");
let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
renderTasks();
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
clearBtn.addEventListener("click", () => {
    if (confirm("Delete all tasks?")) {
        tasks = [];
        saveTasks();
        renderTasks();
    }
});
function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        alert("Please enter a task.");
        return;
    }
    tasks.push({
        text: text,
        completed: false
    });
    taskInput.value = "";
    saveTasks();
    renderTasks();
}
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task";
        if (task.completed) {
            li.classList.add("completed");
        }
        const text = document.createElement("span");
        text.textContent = task.text;
        li.appendChild(text);
        const actions = document.createElement("div");
        actions.className = "actions";
        // Complete Button
        const completeBtn = document.createElement("button");
        completeBtn.className = "check";
        completeBtn.innerHTML = "✔";
        completeBtn.onclick = () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        };
        // Edit Button
        const editBtn = document.createElement("button");
        editBtn.className = "edit";
        editBtn.innerHTML = "✏";
        editBtn.onclick = () => {
            const newTask = prompt("Edit Task", task.text);
            if (newTask !== null && newTask.trim() !== "") {
                tasks[index].text = newTask.trim();
                saveTasks();
                renderTasks();
            }
        };
        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.innerHTML = "🗑";
        deleteBtn.onclick = () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        };
        actions.appendChild(completeBtn);
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        li.appendChild(actions);
        taskList.appendChild(li);
    });
    updateStats();
}
function updateStats() {
    totalTasks.textContent = tasks.length.toString();
    const completed = tasks.filter(task => task.completed).length;
    completedTasks.textContent = completed.toString();
    pendingTasks.textContent = (tasks.length - completed).toString();
}
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
