import React, {Fragment, useState} from 'react';
import Todos from './Componentes/Todos';
import Formulario from './Componentes/Formulario';
const todosInicial = [
  {id: 1, title: 'descripcion 1', state: true, priority: true},
  {id: 2, title: 'descripcion 2', state: false, priority: true},
  {id: 3, title: 'descripcion 3', state: true, priority: true},
];
const App = () => {
  const [todos, setTodos] = useState(todosInicial);
const addTodo = todo =>{
setTodos([...todos, todo])    
}
const deleteTodo = (id)=>{
  const newArray = todos.filter((todo)=> todo.id !==id);
  setTodos(newArray)
}
  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario addTodo= {addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
export default App;
