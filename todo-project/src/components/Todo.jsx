import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
function Todo({ todo, onremoveTodo }) {
  const { id, content } = todo;

  const removeTodo = () => {
    onremoveTodo(id);
  };

  return (
    <div
      className="todo"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <div>{content}</div>
      <div>
        <IoIosRemoveCircle onClick={removeTodo} className="todo-icons" />
        <CiEdit className="todo-icons" />
      </div>
    </div>
  );
}

export default Todo;
