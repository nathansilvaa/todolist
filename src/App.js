import React, { useEffect, useState } from 'react';
import './App.css';
import TodoInput from '../src/componentes/TodoInput';
import TodoList from '../src/componentes/TodoList';

function App() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    setLista([]);
  }, []);

  const addTodo = (newItem) => {
    if (lista.includes(newItem)) {
      alert('Você já adicionou essa tarefa');
      return;
    }

    setLista([...lista, newItem]);
  };

  const deletarItem = (index) => {
    const updatedList = [...lista];
    updatedList.splice(index, 1);
    setLista(updatedList);
  };

  return (
    <div className='container'>
      <TodoInput addTodo={addTodo} />
      <TodoList lista={lista} deletarItem={deletarItem} />
    </div>
  );
}

export default App;
