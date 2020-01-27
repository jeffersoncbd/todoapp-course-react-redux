import React, { useState, useEffect } from 'react'
import api from './services/api'

import NewTask from './components/NewTask'
import TasksList from './components/TasksList'

import { Container } from '@material-ui/core'

export default function App() {
  const [tasks, setTasks] = useState([])

  const handleAddNewTask = description => {
    setTasks([{ _id: 'temp', description, done: false }, ...tasks])
    api.post('/tasks', { description }).then(response => {
      setTasks([response.data, ...tasks])
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
      <TasksList tasks={tasks} />
    </Container>
  )
}
