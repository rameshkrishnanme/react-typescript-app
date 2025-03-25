import { useRef, useContext } from "react";
import styles from "./NewTodo.module.css";
import {TodosContext} from "../store/todos.context";

//const NewTodo: React.FC<{onAddTodo:Function}> = (props) => {
const NewTodo: React.FC = () => {
    const todoctx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
        todoctx.addTodo?.(enteredText);
    }
    
    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <label htmlFor='text'>Todo Text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default NewTodo