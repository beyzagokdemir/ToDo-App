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

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });

    setTodos([...updatedTodos]);
  };

  console.log(todos);

  return (
    <div className="App">
      <div className="main">
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList
          onremoveTodo={removeTodo}
          todos={todos}
          onupdateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
