import React, { useState } from 'react';

const TaskInput = ({ agregarTarea }) => {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === '') return; // No agrega si está vacío
    agregarTarea(texto); // Envía al padre
    setTexto(''); // Limpia el input (UX Bonus)
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Nueva tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskInput;