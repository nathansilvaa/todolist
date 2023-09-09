import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [novoItem, setNovoItem] = useState('');

  const adicionarNovoItem = () => {
    if (novoItem.length <= 0) {
      alert("Por favor, digite algo no campo 'tarefa'");
      return;
    }

    addTodo(novoItem);
    setNovoItem('');
  };

  return (
    <div>
      <input
        placeholder='Tarefa'
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
        type='text'
      />
      <button onClick={adicionarNovoItem}>Adicionar</button>
    </div>
  );
}

export default TodoInput;
