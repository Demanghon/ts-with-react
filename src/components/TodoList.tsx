import React from "react";
import { TodoItem } from "../models/Todo.models";
import './TodoList.css'

interface TodoListProps { 
    items: TodoItem[],
    onTodoDelete: (id:string) => void
};


const TodoList = ({ items, onTodoDelete }: TodoListProps): JSX.Element => { 
    return (
        <ul>{items.map(item => (
                <li key={item.id}>
                    <span>{item.text}</span>
                    <button onClick={onTodoDelete.bind(null, item.id)}>DELETE</button>
                </li>
            ))}
        </ul>
    );
 }

export default TodoList