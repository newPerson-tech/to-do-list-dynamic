// Initial list of todos
const todos = [
  { text: "Learn JavaScript", done: false },
  { text: "Build a todo app", done: false },
];

// Function to render the todo list
function renderTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = ""; // Clear existing list

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo.text;
    if (todo.done) {
      todoItem.classList.add("done");
    }
    todoItem.addEventListener("click", () => toggleTodoState(index));
    todoList.appendChild(todoItem);
  });
}

// Function to toggle the state of a todo
function toggleTodoState(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
}

// Function to add a new todo
function addTodo(event) {
  event.preventDefault(); // Prevent form submission
  const todoInput = document.getElementById("todo-input");
  const newTodoText = todoInput.value.trim();

  if (newTodoText) {
    todos.push({ text: newTodoText, done: false });
    todoInput.value = ""; // Clear the input
    renderTodos();
  }
}

// Initial rendering of the todo list
renderTodos();

// Add event listener to the form
document.getElementById("todo-form").addEventListener("submit", addTodo);
