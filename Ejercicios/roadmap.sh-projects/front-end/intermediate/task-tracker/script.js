const inputBox = document.querySelector(".task-input");
const listContainer = document.querySelector(".list-container");
const addTaskBtn = document.querySelector(".add-task-btn");

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

const addTask = () => {
  if (inputBox.value.trim() === "") {
    alert("You must be write something!");
  } else {
    let li = document.createElement("LI");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("SPAN");
    span.innerHTML = "🗑️";
    li.appendChild(span);
  }
  inputBox.value = "";

  saveData();
};

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTasks = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showTasks();
