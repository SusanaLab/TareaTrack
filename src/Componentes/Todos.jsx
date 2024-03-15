import React from 'react';
import Todo from './Todo';


const Todos = ({todos}) => {
  return (
    <div>
      <h2 className="text-center">Todos</h2>
      <ul className='list-group'>
        {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}/>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
