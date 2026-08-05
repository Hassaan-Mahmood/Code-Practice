// // =======================
// //  Getting HTML Elements
// // =======================

// let inputTask = document.getElementById("taskInput");

// let addBtn = document.getElementById("addBtn");
// let editBtn = document.getElementById("editBtn");
// let deleteBtn = document.getElementById("deleteBtn");
// let clearBtn = document.getElementById("clearBtn");
// let resetBtn = document.getElementById("resetBtn");

// let list = document.getElementById("list");

// let tasks = [];
// let selectedIndex = -1;
// let editIndex = -1;

// // =======================
// //  Save Data
// // =======================
// function saveTasks() {
//   localStorage.setItem("Tasks", JSON.stringify(tasks));
// }

// // =======================
// //  Load Data
// // =======================
// function loadTasks() {
//   let storedTasks = localStorage.getItem("Tasks");
//   if (storedTasks) {
//     tasks = JSON.parse(storedTasks);
//   }
// }

// // =======================
// //  Add Tasks
// // =======================
// function addTask() {
//   let task = inputTask.value.trim();
//   if (task === "") {
//     alert("Enter a task");
//     return;
//   }

//   if (editIndex === -1) {
//     tasks.push(task);
//   } else {
//     tasks[editIndex] = tasks;
//     editIndex = -1;
//   }
//   saveTasks();
//   renderTasks();
//   inputTask.value = "";
//   inputTask.focus();
// }

// // =======================
// //  Render Tasks
// // =======================
// function renderTasks() {
//   list.innerHTML = "";

//   for (let i = 0; i < tasks.length; i++) {
//     let li = document.createElement("li");
//     li.innerHTML = tasks[i];
//     list.appendChild(li);
//     li.onclick = function () {
//       if (selectedIndex === i) {
//         selectedIndex = -1;
//         li.classList.remove("selected");
//       } else {
//         let allLi = document.querySelectorAll("#list li");
//         for (let j = 0; j < allLi.length; j++) {
//           allLi[j].classList.remove("selected");
//         }
//         selectedIndex = i;
//         li.classList.add("selected");
//       }
//     };
//     console.log(selectedIndex);
//   }
// }

// // // =======================
// // //  Delete Tasks
// // // =======================

// function deleteTask() {
//   if (selectedIndex === -1) {
//     alert("Please select a task first");
//     return;
//   }
//   tasks.splice(selectedIndex, 1);
//   saveTasks();
//   renderTasks();
// }

// // =======================
// //  Edit Tasks
// // =======================

// function editTask() {
//   if (selectedIndex === -1) {
//     alert("Please select a task first");
//     return;
//   }
//   editIndex = selectedIndex;
//   inputTask.value = tasks[editIndex];
//   inputTask.focus();
// }

// // =======================
// //  Clear All Tasks
// // =======================
// function clearAll() {
//   tasks = [];
//   saveTasks();
//   renderTasks();
// }

// // =======================
// //  Reset Input
// // =======================
// function resetInput() {
//   inputTask.value = "";
//   renderTasks();
//   inputTask.focus();
// }

// // // Calling the functions through buttons
// addBtn.addEventListener("click", addTask);
// deleteBtn.addEventListener("click", deleteTask);
// editBtn.addEventListener("click", editTask);
// clearBtn.addEventListener("click", clearAll);
// resetBtn.addEventListener("click", resetInput);

// loadTasks();
// renderTasks();

// =================================================================================================
// Budget Calculator
// =================================================================================================

var expenseName = document.getElementById("expenseName");
var amount = document.getElementById("amount");
var list = document.getElementById("list");
var totalAmount = document.getElementById("totalAmount");

var allExpenses = [];

var expenseName = document.getElementById("expenseName");
var expenseAmount = document.getElementById("amount");
var list = document.getElementById("list");
var totalAmount = document.getElementById("totalAmount");
var allItems = [];

function addExpense() {
  if (expenseName.value == "" || expenseAmount.value == "") {
    alert("Please fill the form first!");
    // return
  } else {
    var obj = {
      name: expenseName.value,
      amount: expenseAmount.value,
    };
    allItems.push(obj);
    renderItem();
    showTotal();
  }
}

function renderItem() {
  list.innerHTML = "";
  for (var i = 0; i < allItems.length; i++) {
    var item = allItems[i];
    list.innerHTML += `
        <div class="item">
          <div class="left">
            <h3>${item.name}</h3>
          </div>
          <div class="right">
            <span class="price">${item.amount}</span>
            <div class="actions">
              <button onclick="editItem(${i})" class="edit" title="Edit">✏️</button>
              <button onclick="deleteItem(${i})" class="delete" title="Delete">🗑️</button>
            </div>
          </div>
        </div>`;
  }
  expenseName.value = "";
  expenseAmount.value = "";
  expenseName.focus();
  expenseAmount.focus();
}

function deleteItem(index) {
  allItems.splice(index, 1);
  renderItem();
  showTotal();
}

function editItem(index) {
  var userNewItem = expenseName.value;
  var userNewAmount = expenseAmount.value;
  userNewItem = allItems[index].name;
  userNewAmount = allItems[index].amount;
  expenseName.focus();
  allItems.splice(index, 1, userNewItem);
  allItems.splice(index, 1, userNewAmount);
  console.log(expenseAmount.value);
  // renderItem();
}

function showTotal() {
  var total = 0;
  for (let i = 0; i < allItems.length; i++) {
    var sum = allItems[i];
    total += Number(sum.amount);
  }
  totalAmount.innerHTML = total;
}

renderItem();
showTotal();

console.log("Hello World 1");
