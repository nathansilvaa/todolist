import React from 'react';

function TodoList({ lista, deletarItem }) {
  return (
    <ul className='todoList'>
      {lista.map((item, index) => (
        <li key={index} className='todoItem'>
          {item}
          <button onClick={() => deletarItem(index)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
