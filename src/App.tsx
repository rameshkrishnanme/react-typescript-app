import React from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import './App.css';

function App() {

  const todos = [
    new Todo('Teaching React'), 
    new Todo('Teaching TypeScript'),
    new Todo('Teaching Next.js')
  ];

  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
