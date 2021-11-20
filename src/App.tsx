import React, {useState} from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { TodoItem } from './models/Todo.models';

function App() {
  const [todos, setTodo] = useState<TodoItem[]>([{id:'t1', text: 'Finish the task'}]);

  const todoAddHandler = (text:string) => {
    setTodo(prevTodos => {
      return [...prevTodos, {id: Math.random().toString(), text: text}];
    })
  }

  const todoDeleteHandler = (id:string): void => {
    console.log(`delete todo id ${id}`)
    setTodo(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onTodoDelete={todoDeleteHandler} />
    </div>
  );
}

export default App;
