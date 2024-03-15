import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Formulario = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: 'Todo uno',
    description: 'Descripcion uno',
    state: 'pendiente',
    priority: true,
  });

  const { title, description, state, priority } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, complete todos los campos.',
      });
    } else {
      addTodo({
        id: Date.now(),
        ...todo,
      });

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado correctamente',
        showConfirmButton: false,
        timer: 1500,
      });

      // Reiniciar el formulario después de agregar el TODO
      setTodo({
        title: '',
        description: '',
        state: 'pendiente',
        priority: true,
      });
    }
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setTodo({
      ...todo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck"> Dar prioridad </label>
      </div>
      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={handleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};

export default Formulario;

