import React, { useState } from 'react';

export default function AddTodo<T>({onAdd : T}) : JSX.Element {
  const [text , setText] = useState<string>('');
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setText(e.target.value);
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(text.trim().length === 0){
      return;
    }
    onAdd<string>({id : '', text , status:'진행 중'});
    setText('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='할일을 추가하세요.' value={text} onChange={handleChange} />
      <button>추가하기</button>
    </form>
  );
}

