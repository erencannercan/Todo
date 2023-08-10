const todoItem = document.querySelector(".todoItem");
const todoInput = document.querySelector(".todoInput");
const todoList = document.querySelector(".todoList");
const todoForm = document.querySelector(".todoForm");
const filterBtns = document.querySelectorAll('[name="filter"]');

// Add Todo
todoForm.addEventListener("submit", addTodo);

function addTodo(e) {
e.preventDefault();
if(todoInput.value === "") {
    return;
}

todoList.innerHTML +=`
    <li class="todoItem">
        <label>
            <input class="checkboxInput" type="checkbox">
            <span class="todoName">${todoInput.value}</span>
            <button class="deleteBtn">❌</button>
        </label>
    </li>
`
    todoInput.value = "";
    todoInput.focus();
    localSave();
}
 
// Filter Todos
function filterTodos() {
    todoList.classList.value = "todoList " + this.value
}

filterBtns.forEach(filterBtn => {
    filterBtn.addEventListener("click", filterTodos )
})

// Delete Button
todoList.addEventListener("click", deleteBtn);

function deleteBtn(e) {
    const targetElement = e.target

    if(targetElement.classList.contains("deleteBtn")) {
        targetE(targetElement)
    }
    localSave();
} 

function targetE(el) {
    el.parentElement.parentElement.remove()
}

// Input edit


//Local Storage

function localSave() {
    localStorage.setItem("data",todoList.innerHTML);
}

function localLoad() {
    todoList.innerHTML = localStorage.getItem("data");
}

localLoad(); 




