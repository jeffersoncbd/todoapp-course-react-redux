import React, { useState } from 'react'

import NewTask from './components/NewTask'

import { Container } from '@material-ui/core'

export default function App() {
  const [tasks, setTasks] = useState([])

  const handleAddNewTask = task => {
    setTasks([...tasks, task])
  }

  return (
    <Container>
      <h1>Tarefas</h1>
      <NewTask addNewTask={handleAddNewTask} />
      {tasks.map(task => task)}
    </Container>
  )
}
