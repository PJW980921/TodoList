import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoUtils from "../TodoUtils/TodoUtils";


export default function TodoList({ names }) {
  const [todos, setTodos] = useState([
    { id: "1", text: "장보기", status: "진행 중" },
    { id: "2", text: "공부하기", status: "진행 중" },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);

  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  const nameAll = getNameAll(todos, names);

  return (
    <section>
      <ul>
        {nameAll.map((item) => (
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

function getNameAll(todos, names) {
  if (names === "전체") {
    return todos;
  }
  return todos.filter((todo) => todo.status === names);
}

