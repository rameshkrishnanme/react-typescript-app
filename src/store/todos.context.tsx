import React from "react";
import Todo from "../models/todo";

type TodoContextType = {
    items: Todo[];
    addTodo: (todoText: string) => void;
    removeTodo: (id: string) => void;
  };
const TodosContext = React.createContext<TodoContextType>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const onAddTodoHandler = (text: string): void => {
    setTodos([...todos, new Todo(text)]);
  };

  function onRemoveToDoHandler(todoId: string): void {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  }

  const contextValue: TodoContextType = {
    items: todos,
    addTodo: onAddTodoHandler,
    removeTodo: onRemoveToDoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
export { TodosContext };