console.log(1)
console.log(2)
console.log(3)
  console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
// =================================================================================================
// Todo Tasks List
// =================================================================================================

// =======================
//  Getting HTML Elements
// =======================

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

// // Calling the functions through buttons
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

// var expenseName = document.getElementById("expenseName");
// var amount = document.getElementById("amount");
// var list = document.getElementById("list");
// var totalAmount = document.getElementById("totalAmount");

// var allExpenses = [];

// var expenseName = document.getElementById("expenseName");
// var expenseAmount = document.getElementById("amount");
// var list = document.getElementById("list");
// var totalAmount = document.getElementById("totalAmount");
// var addBtn = document.getElementById("addBtn");
// var allItems = [];
// var editIndex = -1;

// function addExpense() {
//   var userItemName = expenseName.value.trim();
//   var userItemAmout = expenseAmount.value.trim();
//   if (userItemName == "" || userItemAmout == "") {
//     alert("Please fill the form first!");
//     return;
//   }
//   if (editIndex === -1) {
//     var obj = {
//       name: expenseName.value,
//       amount: expenseAmount.value,
//     };
//     allItems.push(obj);
//   } else {
//     allItems[editIndex].name = userItemName;
//     allItems[editIndex].amount = userItemAmout;
//     editIndex = -1;
//     addBtn.innerHTML = `Add Expense`;
//   }

//   renderItem();
//   showTotal();
// }

// function renderItem() {
//   list.innerHTML = "";
//   for (var i = 0; i < allItems.length; i++) {
//     var item = allItems[i];
//     list.innerHTML += `
//         <div class="item">
//           <div class="left">
//             <h3>${item.name}</h3>
//           </div>
//           <div class="right">
//             <span class="price">${item.amount}</span>
//             <div class="actions">
//               <button onclick="editItem(${i})" class="edit" title="Edit">✏️</button>
//               <button onclick="deleteItem(${i})" class="delete" title="Delete">🗑️</button>
//             </div>
//           </div>
//         </div>`;
//   }
//   expenseName.value = "";
//   expenseAmount.value = "";
//   expenseName.focus();
// }

// function deleteItem(index) {
//   allItems.splice(index, 1);
//   renderItem();
//   showTotal();
// }

// function editItem(index) {
//   var userNewItem = expenseName.value;
//   var userNewAmount = expenseAmount.value;
//   userNewItem = allItems[index].name;
//   userNewAmount = allItems[index].amount;
//   expenseName.focus();
//   allItems.splice(index, 1, userNewItem);
//   allItems.splice(index, 1, userNewAmount);
//   console.log(expenseAmount.value);
//   // renderItem();
// }

// function showTotal() {
//   var total = 0;
//   for (let i = 0; i < allItems.length; i++) {
//     var sum = allItems[i];
//     total += Number(sum.amount);
//   }
//   totalAmount.innerHTML = total;
// }

// =================================================================================================
// Mcqs Quiz App in class
// =================================================================================================
const htmlQuestions = [
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["link", "a", "href", "url"],
    answer: "a",
  },
  {
    question: "Which HTML tag is used to create a paragraph?",
    options: ["p", "para", "text", "paragraph"],
    answer: "p",
  },
  {
    question: "Which HTML tag is used to insert an image?",
    options: ["picture", "img", "image", "src"],
    answer: "img",
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    options: ["ol", "ul", "li", "list"],
    answer: "ul",
  },
  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["ul", "ol", "li", "list"],
    answer: "ol",
  },
  {
    question: "Which HTML tag is used to create a list item?",
    options: ["item", "li", "list", "ul"],
    answer: "li",
  },
  {
    question: "Which HTML tag is used to create a line break?",
    options: ["break", "lb", "br", "hr"],
    answer: "br",
  },
  {
    question: "Which HTML tag is used to insert a horizontal line?",
    options: ["line", "hr", "br", "border"],
    answer: "hr",
  },
  {
    question: "Which HTML tag is used to create a table?",
    options: ["table", "tr", "td", "tab"],
    answer: "table",
  },
  {
    question: "Which HTML tag is used to create a table row?",
    options: ["td", "tr", "th", "table"],
    answer: "tr",
  },
  {
    question: "Which HTML tag is used to create a table cell?",
    options: ["td", "th", "tr", "cell"],
    answer: "td",
  },
  {
    question: "Which HTML tag is used to create a table header cell?",
    options: ["thead", "th", "header", "td"],
    answer: "th",
  },
  {
    question: "Which HTML tag is used to create a form?",
    options: ["input", "form", "label", "fieldset"],
    answer: "form",
  },
  {
    question: "Which HTML tag is used to create a text input field?",
    options: ["textbox", "input", "text", "field"],
    answer: "input",
  },
  {
    question: "Which HTML tag is used to create a button?",
    options: ["btn", "button", "input", "click"],
    answer: "button",
  },
  {
    question: "Which HTML tag is used to create a dropdown list?",
    options: ["select", "option", "list", "dropdown"],
    answer: "select",
  },
  {
    question: "Which HTML tag defines an option in a dropdown list?",
    options: ["choice", "item", "option", "value"],
    answer: "option",
  },
  {
    question: "Which HTML tag is used for a multiline text input?",
    options: ["input", "textbox", "textarea", "text"],
    answer: "textarea",
  },
  {
    question: "Which HTML tag is used to create a label for a form element?",
    options: ["caption", "label", "legend", "span"],
    answer: "label",
  },
  {
    question: "Which HTML tag is used to play audio files?",
    options: ["music", "audio", "sound", "media"],
    answer: "audio",
  },
  {
    question: "Which HTML tag is used to play video files?",
    options: ["media", "movie", "video", "play"],
    answer: "video",
  },
  {
    question: "Which HTML tag is used to embed another webpage?",
    options: ["frame", "iframe", "embed", "window"],
    answer: "iframe",
  },
  {
    question: "Which HTML tag is used to make text semantically bold?",
    options: ["b", "bold", "strong", "em"],
    answer: "strong",
  },
  {
    question: "Which HTML tag is used to emphasize text?",
    options: ["italic", "i", "em", "strong"],
    answer: "em",
  },
  {
    question: "Which HTML tag is used to display preformatted text?",
    options: ["code", "pre", "text", "format"],
    answer: "pre",
  },
  {
    question: "Which HTML tag is used to display computer code?",
    options: ["script", "code", "pre", "program"],
    answer: "code",
  },
  {
    question: "Which HTML tag defines the main content of a webpage?",
    options: ["main", "body", "section", "article"],
    answer: "main",
  },
  {
    question: "Which HTML tag defines the header of a webpage?",
    options: ["top", "header", "head", "heading"],
    answer: "header",
  },
  {
    question: "Which HTML tag defines the footer of a webpage?",
    options: ["bottom", "footer", "end", "foot"],
    answer: "footer",
  },
  {
    question: "Which HTML tag is used to define navigation links?",
    options: ["menu", "nav", "links", "navigation"],
    answer: "nav",
  },
];

var questionBar = document.getElementById("question-bar");
var question = document.getElementById("question");
var options = document.getElementById("options");

var count = 0;

function quiz() {
  options.innerHTML = "";
  questionBar.innerHTML = `Question ${count + 1}/${htmlQuestions.length}`;
  var obj = htmlQuestions[count];
  question.innerHTML = obj.question;
  for (var i = 0; i < obj.options.length; i++) {
    var item = obj.options[i];
    options.innerHTML += `<button>${item}</button>`;
  }
}

function next() {
  if (count < htmlQuestions.length - 1) {
    count++;
    quiz();
  } else {
    alert("Quiz has been completed");
  }
}

quiz();

renderItem();
showTotal();


// 8 August 2026 sir code 

var questionBar = document.getElementById('question-bar');
var question = document.getElementById('question');
var options = document.getElementById('options');

var count = 0;
var isSelected = false;
var selectedText = '';
var successCount = 0;
var failureCount = 0;

function quiz() {
    options.innerHTML = ''
    questionBar.innerHTML = `Question ${count + 1}/${htmlQuestions.length}`;
    var obj = htmlQuestions[count];

    question.innerHTML = obj.question;
    for (var i = 0; i < obj.options.length; i++) {
        var item = obj.options[i];
        if (selectedText === item) {
            options.innerHTML += `<button class="selected-option" onclick="isOptionSelected('${item}')">${item}</button>`
        } else {
            options.innerHTML += `<button onclick="isOptionSelected('${item}')">${item}</button>`
        }
    }
}


function next() {

    if (isSelected === false) {
        alert("Please select an option first");
        return;
    }

    // Selected value reset
    isSelected = false;
    selectedText = ''


    if (count < htmlQuestions.length - 1) {
        count++;
        quiz()
    } else {
        alert("Quiz has been completed")
    }

    if (selectedText) {
        successCount++
    } else {
        failureCount++
    }

    // 
}

function isOptionSelected(item) {
    selectedText = item;
    isSelected = true;
    quiz();
}

quiz()





// 8 August 2026 my code 


var questionBar = document.getElementById('question-bar');
var question = document.getElementById('question');
var options = document.getElementById('options');

var count = 0;
var isSelected = false;
var selectedText = '';
var successCount = 0;
var failureCount = 0;

function quiz() {
    options.innerHTML = ''
    questionBar.innerHTML = `Question ${count + 1}/${htmlQuestions.length}`;
    var obj = htmlQuestions[count];

    question.innerHTML = obj.question;
    for (var i = 0; i < obj.options.length; i++) {
        var item = obj.options[i];
        if (selectedText === item) {
            options.innerHTML += `<button class="selected-option" onclick="isOptionSelected('${item}')">${item}</button>`
            
            var allAnswers = htmlQuestions[count].answer;
            if (selectedText === allAnswers) {
                successCount++
                // console.log("successCount",successCount);
                
            } else {
                failureCount++
                // console.log("failureCount",failureCount);
            }

        } else {
            options.innerHTML += `<button onclick="isOptionSelected('${item}')">${item}</button>`
        }
    }

    
 console.log("successCount",successCount);
console.log("failureCount",failureCount);
}


function next() {

    if (isSelected === false) {
        alert("Please select an option first");
        return;
    }

    if (selectedText === htmlQuestions[count].answer) {
        successCount++
    } else {
        failureCount++
    }


    // Selected value reset
    isSelected = false;
    selectedText = ''


    if (count < htmlQuestions.length - 1) {
        count++;
        quiz()
    } else {
        alert("Quiz has been completed")
    }


}

function isOptionSelected(item) {
    selectedText = item;
    isSelected = true;
    quiz();
}

quiz()














// 15 August 2026

var paragraphs = document.getElementsByTagName("p");
paragraphs[1].innerHTML = "Hello World"


var paragraphs = document.getElementsByClassName('para')
console.log(paragraphs[0]);



var paragraph = document.querySelector('#heading')
var paragraph = document.querySelectorAll('.para')
console.log(paragraph);


var modal = document.getElementById("userModal");
var table = document.getElementById("userTable");
var userName = document.getElementById("name");
var age = document.getElementById("age");
var education = document.getElementById("education");
var userTable = document.getElementById("userTable");
var allStudents = []

function displayStudents() {
    userTable.innerHTML = ""
    for (var i = 0; i < allStudents.length; i++) {
        var item = allStudents[i]
        userTable.innerHTML += `<tr>
            <td>${i + 1}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.education}</td>
            <td><button>✏️</button><button onclick="deleteStudent('${i}')">❌</button></td>
          </tr>`
    }
}

displayStudents()

function saveStudent() {
    var obj = {
        name: userName.value,
        age: age.value,
        education: education.value,
        id: Date.now()
    }

    allStudents.push(obj);

    // Reset the fields
    userName.value = ""
    age.value = ""
    education.value = ""

    // Close modal
    closeModal();

    displayStudents()
}


function deleteStudent(index) {
    if (confirm("Are you sure you want to delete this record?")) {
        allStudents.splice(Number(index), 1)
        displayStudents()
    }

}


var modal = document.getElementById("userModal");
var table = document.getElementById("userTable");
var userName = document.getElementById("name");
var userTable = document.getElementById("userTable");
var allClasses = []

function displayClass() {
    userTable.innerHTML = ""
    for (var i = 0; i < allClasses.length; i++) {
        var item = allClasses[i]
        userTable.innerHTML += `<tr>
            <td>${i + 1}</td>
            <td>${item.name}</td>
            <td><button>✏️</button><button onclick="deleteTeacher('${i}')">❌</button></td>
          </tr>`
    }
}

displayClass()

function saveClass() {
    var obj = {
        name: userName.value,
        id: Date.now()
    }

    allClasses.push(obj);

    // Reset the fields
    userName.value = ""

    // Close modal
    closeModal();

    displayClass()
}


function deleteTeacher(index) {
    if (confirm("Are you sure you want to delete this record?")) {
        allClasses.splice(Number(index), 1)
        displayClass()
    }

}




var modal = document.getElementById("userModal");
var table = document.getElementById("userTable");
var userName = document.getElementById("name");
var age = document.getElementById("age");
var education = document.getElementById("education");
var userTable = document.getElementById("userTable");
var allTeachers = []

function displayTeachers() {
    userTable.innerHTML = ""
    for (var i = 0; i < allTeachers.length; i++) {
        var item = allTeachers[i]
        userTable.innerHTML += `<tr>
            <td>${i + 1}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.education}</td>
            <td><button>✏️</button><button onclick="deleteTeacher('${i}')">❌</button></td>
          </tr>`
    }
}

displayTeachers()

function saveTeacher() {
    var obj = {
        name: userName.value,
        age: age.value,
        education: education.value,
        id: Date.now()
    }

    allTeachers.push(obj);

    // Reset the fields
    userName.value = ""
    age.value = ""
    education.value = ""

    // Close modal
    closeModal();

    displayTeachers()
}


function deleteTeacher(index) {
    if (confirm("Are you sure you want to delete this record?")) {
        allTeachers.splice(Number(index), 1)
        displayTeachers()
    }

}




function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

function windowClick() {
    if (event.target === modal) {
        closeModal();
    }
}


// Close modal when clicking outside
window.onclick = windowClick





  //========================================== 18 August 2026======================================================
  //index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Student Management</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-logo">
        <h2>School Admin</h2>
      </div>

      <nav class="sidebar-nav">
        <a href="index.html" class="nav-link active">
          <span>🎓</span>
          Student
        </a>

        <a href="teacher.html" class="nav-link">
          <span>👨‍🏫</span>
          Teacher
        </a>

        <a href="class.html" class="nav-link">
          <span>📚</span>
          Class
        </a>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Topbar -->
      <header class="topbar">
        <div>
          <h1>Student Management</h1>
          <p>Manage your students</p>
        </div>

        <div class="admin-profile">
          <div class="profile-circle">A</div>
          <span>Admin</span>
        </div>
      </header>

      <!-- Page Content -->
      <main class="container">
        <!-- Button -->
        <div class="top-bar">
          <button class="add-btn" onclick="openModal()">+ Add Student</button>
        </div>

        <!-- Table -->
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Education</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody id="userTable"></tbody>
        </table>
      </main>
    </div>

    <!-- Modal -->
    <div class="modal" id="userModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Add Student</h2>

          <span class="close" onclick="closeModal()"> &times; </span>
        </div>

        <form>
          <div class="form-group">
            <label>Name</label>
            <input type="text" id="name" placeholder="Enter name" required />
          </div>

          <div class="form-group">
            <label>Age</label>
            <input type="number" id="age" placeholder="Enter age" required />
          </div>

          <div class="form-group">
            <label>Education</label>
            <input
              type="text"
              id="education"
              placeholder="Enter education"
              required
            />
          </div>

          <button type="button" class="save-btn" onclick="saveStudent()">
            Save Student
          </button>
        </form>
      </div>
    </div>

    <script src="global.js"></script>
    <script src="app.js"></script>
  </body>
</html>


// stye.css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #f4f6f8;
}

/* =========================
   SIDEBAR
========================= */

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 240px;
  height: 100vh;
  background: #1e293b;
  color: white;
  padding: 25px 15px;
}

.sidebar-logo {
  padding: 0 15px 30px;
  border-bottom: 1px solid #334155;
}

.sidebar-logo h2 {
  font-size: 21px;
}

/* Navigation */

.sidebar-nav {
  margin-top: 25px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;

  color: #cbd5e1;
  text-decoration: none;

  padding: 13px 15px;
  margin-bottom: 8px;

  border-radius: 7px;

  transition: 0.2s;
}

.nav-link span {
  font-size: 18px;
}

.nav-link:hover {
  background: #334155;
  color: white;
}

.nav-link.active {
  background: #2563eb;
  color: white;
}

/* =========================
   MAIN CONTENT
========================= */

.main-content {
  margin-left: 240px;
  min-height: 100vh;
}

/* =========================
   TOPBAR
========================= */

.topbar {
  height: 75px;

  background: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 30px;

  border-bottom: 1px solid #e5e7eb;
}

.topbar h1 {
  font-size: 22px;
  color: #1e293b;
}

.topbar p {
  color: #64748b;
  font-size: 13px;
  margin-top: 4px;
}

/* Admin profile */

.admin-profile {
  display: flex;
  align-items: center;
  gap: 10px;

  color: #334155;
  font-weight: bold;
}

.profile-circle {
  width: 38px;
  height: 38px;

  border-radius: 50%;

  background: #2563eb;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* =========================
   CONTAINER
========================= */

.container {
  max-width: 1100px;
  margin: auto;
  padding: 30px;
}

/* Top Section */

.top-bar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.add-btn {
  background: #2563eb;
  color: white;

  border: none;

  padding: 12px 20px;

  border-radius: 6px;

  cursor: pointer;

  font-size: 15px;
}

.add-btn:hover {
  background: #1d4ed8;
}

/* =========================
   TABLE
========================= */

table {
  width: 100%;

  border-collapse: collapse;

  background: white;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

th,
td {
  padding: 15px;

  text-align: left;

  border-bottom: 1px solid #ddd;
}

th {
  background: #2563eb;
  color: white;
}

tr:hover {
  background: #f8fafc;
}

/* =========================
   MODAL
========================= */

.modal {
  display: none;

  position: fixed;

  inset: 0;

  background: rgba(0, 0, 0, 0.5);

  justify-content: center;
  align-items: center;

  z-index: 1000;
}

.modal-content {
  width: 400px;

  background: white;

  padding: 25px;

  border-radius: 10px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 20px;
}

.modal-header h2 {
  font-size: 22px;
}

.close {
  font-size: 25px;

  cursor: pointer;

  color: #555;
}

/* =========================
   FORM
========================= */

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;

  margin-bottom: 6px;

  font-weight: bold;
}

.form-group input {
  width: 100%;

  padding: 11px;

  border: 1px solid #ccc;

  border-radius: 6px;

  outline: none;
}

.form-group input:focus {
  border-color: #2563eb;
}

.save-btn {
  width: 100%;

  padding: 12px;

  border: none;

  background: #16a34a;

  color: white;

  border-radius: 6px;

  cursor: pointer;

  font-size: 15px;
}

.save-btn:hover {
  background: #15803d;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 700px) {
  .sidebar {
    width: 70px;
    padding: 20px 10px;
  }

  .sidebar-logo h2 {
    display: none;
  }

  .nav-link {
    justify-content: center;
  }

  .nav-link {
    font-size: 0;
  }

  .nav-link span {
    font-size: 20px;
  }

  .main-content {
    margin-left: 70px;
  }

  .topbar {
    padding: 0 15px;
  }

  .topbar h1 {
    font-size: 18px;
  }

  .admin-profile span {
    display: none;
  }

  .container {
    padding: 15px;
    overflow-x: auto;
  }

  table {
    min-width: 700px;
  }

  .modal-content {
    width: calc(100% - 30px);
  }
}


// app.js
// var paragraphs = document.getElementsByTagName("p");
// paragraphs[1].innerHTML = "Hello World"


// var paragraphs = document.getElementsByClassName('para')
// console.log(paragraphs[0]);



// var paragraph = document.querySelector('#heading')
// var paragraph = document.querySelectorAll('.para')
// console.log(paragraph);


var modal = document.getElementById("userModal");
var table = document.getElementById("userTable");
var userName = document.getElementById("name");
var age = document.getElementById("age");
var education = document.getElementById("education");
var userTable = document.getElementById("userTable");
var allStudents = []

function displayStudents() {
    userTable.innerHTML = ""
    for (var i = 0; i < allStudents.length; i++) {
        var item = allStudents[i]
        userTable.innerHTML += `<tr>
            <td>${i + 1}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.education}</td>
            <td><button>✏️</button><button onclick="deleteStudent('${i}')">❌</button></td>
          </tr>`
    }
}

displayStudents()

function saveStudent() {
    var obj = {
        name: userName.value,
        age: age.value,
        education: education.value,
        id: Date.now()
    }

    allStudents.push(obj);

    // Reset the fields
    userName.value = ""
    age.value = ""
    education.value = ""

    // Close modal
    closeModal();

    displayStudents()
}


function deleteStudent(index) {
    if (confirm("Are you sure you want to delete this record?")) {
        allStudents.splice(Number(index), 1)
        displayStudents()
    }

}




// ====================== 27 / 8 / 2026 ======================

var userName = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirm-password');
var allUsers = []

function signup() {
    var validateForm = validation(userName.value, email.value, password.value, confirmPassword.value, false, false)

    // validation false hui to yahin ruk jao
    if (validateForm === false) {
        return
    }

    var getUsers = localStorage.getItem('users');
    if (getUsers) {
        var ParsedUsers = JSON.parse(getUsers);
        allUsers = ParsedUsers
    }

    var userExist = checkExistence(allUsers, email.value)
    if (userExist === true) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User already exist",
        });
        return false
    }


    var obj = {
        name: userName.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        id: Date.now()
    }

    allUsers.push(obj);
    localStorage.setItem('users', JSON.stringify(allUsers))

    window.location.href = "index.html"
}


//global.js

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

function windowClick() {
    if (event.target === modal) {
        closeModal();
    }
}

function validation(name, email, password, confirmPass, age, education) {
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


    // it will check that form has name field or not
    if (name !== false) {
        if (name.length < 3) {
            // alert("Please enter a valid name")
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter a valid name",
            });
            return false
        }
    }

    // it will check that form has name field or not
    if (email !== false) {
        if (emailRegex.test(email)) {

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please provide a valid email",
            });
            return false
        }
    }


    if (password !== false) {
        if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please provide a strong password",
            });
            return false
        }
    }


    if (confirmPass !== false) {
        if (confirmPass !== password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please provide a matching password",
            });
            return false
        }
    }

    if (age !== false) {
        if (age < 12) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter a valid age",
            });
            return false
        }
    }


    if (education !== false) {
        if (education.length < 3) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter a valid degree name",
            });
            return false
        }
    }

    return true
}


function checkExistence(array, email) {
    var exist = false;
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (item.email === email) {
            exist = true;
            break;
        }
    }
    return exist
}

// Close modal when clicking outside
window.onclick = windowClick


// class 

var modal = document.getElementById("userModal");
var table = document.getElementById("userTable");
var userName = document.getElementById("name");
var userTable = document.getElementById("userTable");
var allClasses = []

function displayClass() {
    userTable.innerHTML = ""
    for (var i = 0; i < allClasses.length; i++) {
        var item = allClasses[i]
        userTable.innerHTML += `<tr>
            <td>${i + 1}</td>
            <td>${item.name}</td>
            <td><button>✏️</button><button onclick="deleteTeacher('${i}')">❌</button></td>
          </tr>`
    }
}

displayClass()

function saveClass() {

    var validateForm = validation(userName.value, false, false, false, false, false)

    // validation false hui to yahin ruk jao
    if (validateForm === false) {
        return
    }

    var obj = {
        name: userName.value,
        id: Date.now()
    }

    allClasses.push(obj);

    // Reset the fields
    userName.value = ""

    // Close modal
    closeModal();

    displayClass()
}


function deleteTeacher(index) {
    if (confirm("Are you sure you want to delete this record?")) {
        allClasses.splice(Number(index), 1)
        displayClass()
    }

}















