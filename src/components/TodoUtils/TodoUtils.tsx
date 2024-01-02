import React from "react";
import { FcEmptyTrash } from "react-icons/fc";


export default function TodoUtils({ todo, onUpdate, onDelete } : any)  {
  const { text, status } = todo;
  const handleDelete = () => {
    onDelete(todo);
  };
  const handleChange = (e : any) => {
    const status = e.target.checked ? "진행 완료" : "진행 중";
    onUpdate({ ...todo, status });
  };

  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "진행 완료"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <FcEmptyTrash />
      </button>
    </li>
  );
}
