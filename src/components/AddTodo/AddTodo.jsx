import React, { useState } from 'react';

export default function AddTodo({onAdd}) {
  const [text , setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length === 0){
      return;
    }
    onAdd({id : '', text , status:'진행 중'});
    setText('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='할일을 추가하세요.' value={text} onChange={handleChange} />
      <button>추가하기</button>
    </form>
  );
}

