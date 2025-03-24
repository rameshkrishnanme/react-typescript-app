import React from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <div>
      <Todos items={['React good','Like Java and TypeScript is good']}/>
    </div>
  );
}

export default App;
