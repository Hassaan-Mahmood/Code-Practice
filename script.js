// =======================
//  Getting HTML Elements
// =======================

// input box
let inputTask = document.getElementById("inputTask");

// buttons
let addBtn = document.getElementById("addBtn");
let ediBtn = document.getElementById("editBtn");
let deleteBtn = document.getElementById("deleteBtn");
let clearBtn = document.getElementById("clearBtn");
let resetBtn = document.getElementById("resetBtn");

// UL
let list = document.getElementById("list");

// Array to store tasks
let tasks = [];

// which task is selected?
let selectedIndex = -1;

// which task is being edited?
let editIndex = -1;

// =======================
//  Save Data
// =======================
function saveTasks() {
  localStorage.setItem("Tasks", JSON.stringify(tasks));
}

// =======================
//  Load Data
// =======================
function loadTasks() {
  let storedTasks = localStorage.getItem("Tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}

// =======================
//  Render Tasks
// =======================
function renderTasks() {
  list.innerHTML = ""; // clear the list before rendering
  for (let i = 0; i < tasks.length; i++) { // loop through the array
    let li = document.createElement("li"); // create a list item
    li.innerHTML = tasks[i]; // put the task text in the list item
    list.appendChild(li); // add into UL
  }
}