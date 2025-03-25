import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
import { TodosContext } from "../store/todos.context";

// const Todos: React.FC<{ items: Todo[]; onRemoveToDo: (id: string) => void }> = (
//   props
// ) => {
const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todosContext.items.map((item, index) => (
        <TodoItem
          id={item.id}
          text={item.text}
          onRemoveToDo={todosContext.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
