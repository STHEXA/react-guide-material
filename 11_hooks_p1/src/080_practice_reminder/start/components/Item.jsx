import React, { useState } from "react";
import { useTodosDispatch } from "../context/todoContext";

export default function Item({ todo }) {
  const [editing, setEditing] = useState(todo.content);
  const dispatch = useTodosDispatch();
  const changeText = (e) => {
    setEditing(e.target.value);
  };
  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    dispatch({ type: "todo/update", todo: newTodo });
  };
  const confirmText = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, editing: !todo.editing, content: editing };
    dispatch({ type: "todo/update", todo: newTodo });
  };
  const complete = (todo) => {
    dispatch({ type: "todo/delete", todo });
  };
  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo)}>完了</button>
      <form onSubmit={confirmText} style={{ display: "inline" }}>
        {todo.editing ? (
          <input type="text" onChange={changeText} value={editing} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
}
