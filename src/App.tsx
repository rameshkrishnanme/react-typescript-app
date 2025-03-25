import Todos from "./components/Todos";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos.context";

function App() {
  // const todos2 = [
  //   new Todo("Teaching React"),
  //   new Todo("Teaching TypeScript"),
  //   new Todo("Teaching Next.js"),
  // ];

  // const [todos, setTodos] = useState<Todo[]>(todos2);

  // const onAddTodo = (text: string) : void => {
  //   setTodos([...todos, new Todo(text)]);
  // }

  // function onRemoveToDo(todoId: string) : void {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId);
  //   });
  // }

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
