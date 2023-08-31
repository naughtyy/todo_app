// import Todo from "./todo";

const taskHTML = `<div
class="col-12 p-0 row justify-content-between align-items-center bg-info-subtle mx-0 px-0"
>
<div class="col-4 p-0 ps-4 rounded"><span>Task1</span></div>
<div class="col-4 p-0 text-end">
  <div class="btn btn-primary">Edit</div>
  <div class="btn btn-danger">Delete</div>
</div>
</div>`;

let todos = [];

const input = document.querySelector("input");
const addBtn = document.querySelector(".container>button");
const main = document.getElementsByTagName("main")[0];

addBtn.addEventListener("click", () => {
  const newTodo = new Todo(todos.length + 1, input.value);
  todos.push(newTodo);
  renderTodos();
  input.value = "";
});

const renderTodos = () => {
  //   main.innerHTML += "Task 1";
  main.innerHTML = "";
  todos.forEach((todo) => {
    displayTodo(todo);
  });
};

const displayTodo = (todoObj) => {
  main.innerHTML += `<div
    class="col-12 p-0 row justify-content-between align-items-center bg-info-subtle mx-0 px-0"
    >
    <div class="col-4 p-0 ps-4 rounded"><span>${todoObj.name}</span></div>
    <div class="col-4 p-0 text-end">
      <div class="btn btn-primary">Edit</div>
      <div class="btn btn-danger" onclick="deleteTodoFromTodos(${todoObj.id})">Delete</div>
    </div>
    </div>`;
};

const deleteTodoFromTodos = (todoId) => {
  todos = todos.filter((todo) => todo.id !== todoId);
  renderTodos();
};
