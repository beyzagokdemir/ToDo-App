import React, { useState } from "react";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    if (!newTodo) return;

    const clearInput = () => {
      setNewTodo("");
    };

    const request = {
      id: Math.floor(Math.random() * 999),
      content: newTodo,
    };
    onCreateTodo(request);
    clearInput();
  };
  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Todo Giriniz."
      />
      <button onClick={createTodo} className="todo-create-button">
        Todo Oluşturunuz
      </button>
    </div>
  );
}

export default TodoCreate;
