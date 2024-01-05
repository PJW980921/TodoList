import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoUtils from "../TodoUtils/TodoUtils";


export default function TodoList({ names: string  }) {
  const [todos, setTodos] = useState([
    { id: "1", text: "장보기", status: "진행 중" },
    { id: "2", text: "공부하기", status: "진행 중" },
  ]);
  const handleAdd = (todo : string) => setTodos([...todos, todo]);

  const handleUpdate = (updated : unknown) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted :unknown) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  const nameAll = getNameAll(todos, names);

  return (
    <section>
      <ul>
        {nameAll.map((item : string) => (
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

function getNameAll(todos : string, names : string) {
  if (names === "전체") {
    return todos;
  }
  return todos.filter((todo :string) => todo.status === names);
}

