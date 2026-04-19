import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  // 1. Estado principal: Array de objetos (tareas)
  const [tareas, setTareas] = useState([])

  // 2. Función para agregar una nueva tarea
  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(), // Identificador único
      texto: texto,
      completada: false
    }
    setTareas([...tareas, nuevaTarea])
  }

  // 3. Función para gestionar el cambio de estado (completar/deshacer)
  const completarTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    )
  }

  // 4. Función para eliminar tarea (Bonus)
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  // 5. Estadísticas (Bonus)
  const total = tareas.length
  const completadas = tareas.filter(t => t.completada).length

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      
      {/* Componente para ingresar tareas */}
      <TaskInput agregarTarea={agregarTarea} />

      {/* Estadísticas del Bonus */}
      <div className="stats">
        <p>Total de tareas: {total}</p>
        <p>Completadas: {completadas}</p>
      </div>

      {/* Componente que renderiza la lista */}
      <TaskList 
        tareas={tareas} 
        completarTarea={completarTarea} 
        eliminarTarea={eliminarTarea} 
      />
    </div>
  )
}

export default App
