import React from "react";
import { FcEmptyTrash } from "react-icons/fc";

export default function TodoUtils({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleDelete = () => {
    onDelete(todo);
  };
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <FcEmptyTrash />
      </button>
    </li>
  );
}
