import React, {useRef} from "react";
import './NewTodo.css'

interface NewTodoProps {
    onAddTodo: (text:string) => void;
}

const NewTodo = ({onAddTodo: todoAddHandler}: NewTodoProps) => {

    const todoInputText = useRef<HTMLInputElement>(null);

    const submitTodoHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const textEntered = todoInputText.current!.value;
        todoAddHandler(textEntered);
    }

    return (<form onSubmit={submitTodoHandler}>
        <label htmlFor="todo-text"></label>
        <input type="text" id="todo-text" ref={todoInputText}></input>
        <button type="submit">ADD TODO</button>
    </form>);
}

export default NewTodo