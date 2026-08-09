console.log(1);
console.log(2);

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

    // if (selectedText === htmlQuestions[count].answer) {
    //     successCount++
    // } else {
    //     failureCount++
    // }


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
