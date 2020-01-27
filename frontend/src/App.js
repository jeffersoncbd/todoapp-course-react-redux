import React, { useState, useEffect } from 'react'
import api from './services/api'

import NewTask from './components/NewTask'
import TasksList from './components/TasksList'

import { Container } from '@material-ui/core'

export default function App() {
  const [tasks, setTasks] = useState([])

  const handleAddNewTask = description => {
    const oldTasks = tasks
    setTasks([{ _id: 'temp', description, done: false }, ...tasks])
    api.post('/tasks', { description }).then(response => {
      setTasks([response.data, ...tasks])
    }).catch(error => {
      setTasks(oldTasks)
    })
  }

  const handleMarkAsDone = id => {
    
  }

  const handleDeleteTask = id => {
    const oldTasks = tasks
    const remainingTasks = tasks.filter(task => task._id !== id)
    setTasks(remainingTasks)
    api.delete(`/tasks/${id}`).catch(error => {
      setTasks(oldTasks)
    })
  }

  useEffect(() => {
    api.get('/tasks?sort=-createdAt').then(response => {
      setTasks(response.data)
    })
  }, [])

  return (
    <Container>
      <h1>Tarefas</h1>
      <NewTask addNewTask={handleAddNewTask} />
      <TasksList
        tasks={tasks}
        markAsDone={handleMarkAsDone}
        deleteTask={handleDeleteTask}
      />
    </Container>
  )
}
