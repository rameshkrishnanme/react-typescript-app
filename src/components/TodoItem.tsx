const TodoItem: React.FC<{text:string, id:string}> = (props) => {
    return (
        <li key={props.id}>{props.text}</li>
    );
};

export default TodoItem;