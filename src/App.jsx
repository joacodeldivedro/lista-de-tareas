import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Contador from './components/Contador' 
import ContadorPersistente from './components/ContadorPersistente' // Línea 5 (OK)
import './App.css'

function App() {
  const [tareas, setTareas] = useState([])

  const agregarTarea = (texto) => {
    if (!texto.trim()) return; 
    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
      completada: false
    }
    setTareas([...tareas, nuevaTarea])
  }

  const completarTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    )
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  const total = tareas.length
  const completadas = tareas.filter(t => t.completada).length

  return (
    <div className="container">
      {/* SECCIÓN DE CONTADORES */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Contador />
        <ContadorPersistente />
      </div>

      <hr />

      <h1>Lista de Tareas</h1>
      
      <TaskInput agregarTarea={agregarTarea} />

      <div className="stats">
        <p>Total de tareas: {total}</p>
        <p>Completadas: {completadas}</p>
      </div>

      <TaskList 
        tareas={tareas} 
        completarTarea={completarTarea} 
        eliminarTarea={eliminarTarea} 
      />
    </div>
  )
}

export default App