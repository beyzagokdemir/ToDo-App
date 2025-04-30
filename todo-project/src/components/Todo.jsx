import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
function Todo({ todo }) {
  const { id, content } = todo;

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
        <IoIosRemoveCircle className="todo-icons" />
        <CiEdit className="todo-icons" />
      </div>
    </div>
  );
}

export default Todo;
