import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemoveToDo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item, index) => (
        <TodoItem
          id={item.id}
          text={item.text}
          onRemoveToDo={props.onRemoveToDo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
