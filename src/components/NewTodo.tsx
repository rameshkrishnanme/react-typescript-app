import { useRef } from "react";

const NewTodo: React.FC<{}> = () => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
    }
    
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo Text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default NewTodo