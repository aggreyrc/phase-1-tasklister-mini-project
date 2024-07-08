document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newTaskDescription = document.getElementById("new-task-description").value;
    handleCreateTask(newTaskDescription);
    form.reset();
  })
});

function handleCreateTask(task){
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "x"
  li.textContent = `${task} `;
  li.appendChild(btn);
  document.getElementById("tasks").appendChild(li);
}

function handleDelete(e){
  e.target.parentNode.remove();
}
