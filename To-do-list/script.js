const add = document.getElementById("addBtn")
const tasklist = document.getElementById("taskList")
tasklist.innerHTML = ""

let tasks = []

function renderTasks() {
     tasks.forEach(function(task) {
        const li = document.createElement("li")
        const deleteBtn = document.createElement("button")
        li.textContent = task
        deleteBtn.textContent = "Delete"
        tasklist.appendChild(li)
        li.appendChild(deleteBtn)
    })
}

add.addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput")
    const value = taskInput.value

    if (value === "") {
        return
    }

    tasks.push({ id: Date.now(), text: value })
    taskInput.value = ""
    renderTasks()
})

deleteBtn.addEventListener("click", function() {
    tasks = tasks.filter(function(t) {
        return t.id !== task.id
    })
    renderTasks()
})