import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{text:string, id:string, onRemoveToDo: () => void}> = (props) => {
    return (
        <li className={styles.item}  key={props.id}>{props.text}
        <span style={{marginLeft: "10px"}}>
            <button onClick={props.onRemoveToDo}>Delete</button>
        </span>
        </li>
    );
};

export default TodoItem;