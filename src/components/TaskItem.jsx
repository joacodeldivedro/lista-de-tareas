import React from 'react';

const TaskItem = ({ tarea, completarTarea, eliminarTarea }) => {
  return (
    <li style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '8px',
      borderBottom: '1px solid #eee',
      textDecoration: tarea.completada ? 'line-through' : 'none',
      color: tarea.completada ? 'gray' : 'black'
    }}>
      <span>{tarea.texto}</span>
      <div>
        <button onClick={() => completarTarea(tarea.id)}>
          {tarea.completada ? 'Deshacer' : 'Completar'}
        </button>
        <button onClick={() => eliminarTarea(tarea.id)} style={{ marginLeft: '10px', color: 'red' }}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TaskItem;