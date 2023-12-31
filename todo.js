let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load tasks from local storage when the page loads
window.onload = function () {
  if (tasks.length > 0) {
    tasks.forEach(function (task) {
      createTaskElement(task);
    });
  }
};

function createTaskElement(taskText) {
  let newEle = document.createElement("ul");
  newEle.innerHTML = `${taskText} <i class="fa-solid fa-trash"></i>`;
  text.appendChild(newEle);
  newEle.querySelector("i").addEventListener("click", function () {
    remove(taskText, newEle);
  });
}

function Add() {
  if (inputs.value == "") {
    alert("Please Enter Task");
  } else {
    tasks.push(inputs.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    createTaskElement(inputs.value);
    inputs.value = "";
  }
}

function remove(taskText, element) {
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  element.remove();
}
