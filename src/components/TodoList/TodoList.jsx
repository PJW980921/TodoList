import React, { useState } from 'react';

export default function TodoList() {
  const [todos,setTodos] = useState([
    {id : '1' , text : '장보기',status:'active'},
    {id : '2' , text : '공부하기',status:'active'},
]);
  return (
    <section>
    <ul>
   {
    todos.map((item)=>(
      <li key={item.id}>{item.text}</li>
    ))}
    </ul>
    </section>
  );
}
