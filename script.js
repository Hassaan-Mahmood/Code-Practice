const STORAGE_KEY = "ledger-tasks";

let tasks = [];
let selectedId = null;
let editingId = null;

const listEl = document.getElementById("list");
const inputEl = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function load(tasksData) {
  tasks = tasksData.map((t, i) => ({ id: Date.now() + i, ...t }));
  selectedId = null;
  editingId = null;
  render();
}

function render() {
  save();
  listEl.innerHTML = "";
  editBtn.disabled = deleteBtn.disabled = selectedId === null;

  if (tasks.length === 0) {
    listEl.innerHTML = '<li class="empty">No tasks yet — add one above.</li>';
    return;
  }

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className =
      (task.done ? "done " : "") + (task.id === selectedId ? "selected" : "");
    li.dataset.id = task.id;

    li.innerHTML = `
        <div class="check ${task.done ? "done" : ""}"></div>
        <span class="text"></span>
        <span class="tag">${task.tag}</span>
      `;
    li.querySelector(".text").textContent = task.text;

    li.querySelector(".check").addEventListener("click", (e) => {
      e.stopPropagation();
      task.done = !task.done;
      render();
    });

    li.addEventListener("click", () => {
      selectedId = selectedId === task.id ? null : task.id;
      render();
    });

    listEl.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const value = inputEl.value.trim();
  if (!value) return;

  if (editingId !== null) {
    const task = tasks.find((t) => t.id === editingId);
    task.text = value;
    editingId = null;
    addBtn.textContent = "+ Add";
  } else {
    tasks.push({ id: Date.now(), text: value, tag: "task", done: false });
  }

  inputEl.value = "";
  render();
});

editBtn.addEventListener("click", () => {
  if (selectedId === null) return;
  const task = tasks.find((t) => t.id === selectedId);
  inputEl.value = task.text;
  inputEl.focus();
  editingId = selectedId;
  addBtn.textContent = "Save";
});

deleteBtn.addEventListener("click", () => {
  if (selectedId === null) return;
  tasks = tasks.filter((t) => t.id !== selectedId);
  selectedId = null;
  render();
});

document.getElementById("clearBtn").addEventListener("click", () => {
  tasks = [];
  selectedId = null;
  render();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  inputEl.value = "";
  editingId = null;
  addBtn.textContent = "+ Add";
  load(defaultTasks);
});

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  tasks = JSON.parse(saved);
  render();
} else {
  load(defaultTasks);
}

