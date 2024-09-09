interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Build a To-Do List", completed: false },
];

function getTodos(): Todo[] {
  return todos;
}

function addTodo(todo: Todo): void {
  todos.push(todo);
}

function completeTodo(id: number): void {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = true;
  }
}

// Example usage:
const newTodo: Todo = { id: 3, title: "Take a break", completed: false };
addTodo(newTodo);
completeTodo(2);

console.log(getTodos());
