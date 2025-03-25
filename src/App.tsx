import React from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import "./App.css";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

function App() {
  const todos2 = [
    new Todo("Teaching React"),
    new Todo("Teaching TypeScript"),
    new Todo("Teaching Next.js"),
  ];

  const [todos, setTodos] = useState<Todo[]>(todos2);

  const onAddTodo = (text: string) : void => {
    setTodos([...todos, new Todo(text)]);
  }

  return (
    <div>
      <NewTodo onAddTodo={onAddTodo}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
