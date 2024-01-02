import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoUtils from "../TodoUtils/TodoUtils";


export default function TodoList({ names  } : any) {
  const [todos, setTodos] = useState([
    { id: "1", text: "장보기", status: "진행 중" },
    { id: "2", text: "공부하기", status: "진행 중" },
  ]);
  const handleAdd = (todo : any) => setTodos([...todos, todo]);

  const handleUpdate = (updated : any) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted :any) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  const nameAll = getNameAll(todos, names);

  return (
    <section>
      <ul>
        {nameAll.map((item : any) => (
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

function getNameAll(todos : any, names : any) {
  if (names === "전체") {
    return todos;
  }
  return todos.filter((todo :any) => todo.status === names);
}

