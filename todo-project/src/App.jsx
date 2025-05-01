import { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const removeTodo = (todoId) => {
    setTodos([todos.filter((todo) => todo.id !== todoId)]);
  };

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  console.log(todos);

  return (
    <div className="App">
      <div className="main">
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList onremoveTodo={removeTodo} todos={todos} />
      </div>
    </div>
  );
}

export default App;
