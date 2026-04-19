import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tareas, completarTarea, eliminarTarea }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tareas.map((tarea) => (
        <TaskItem 
          key={tarea.id} 
          tarea={tarea} 
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </ul>
  );
};

export default TaskList;