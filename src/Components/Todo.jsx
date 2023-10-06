import React, { useState } from 'react';
import './Todo.css';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input === '') {
      return;
    }

    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className="todo">
      <div className="container">
        <h1 className="title">Todo List</h1>
        <textarea
          name="todo-input"
          id="todo-input"
          cols="30"
          rows="1"
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button className="add-task" onClick={addTodo}>
          Add
        </button>
        <div className="list">
          {todos.map((item, index) => (
            <div key={index} className="item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
