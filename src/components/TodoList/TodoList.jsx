import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoUtils from "../TodoUtils/TodoUtils";

export default function TodoList() {
  const handleAdd = (todo) => setTodos([...todos, todo]);

  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  const [todos, setTodos] = useState([
    { id: "1", text: "장보기", status: "active" },
    { id: "2", text: "공부하기", status: "active" },
  ]);

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <TodoUtils
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
