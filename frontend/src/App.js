import React, { useState, useEffect } from 'react'
import api from './services/api'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setTasks } from './redux/actions'

import NewTask from './components/NewTask'
import TasksList from './components/TasksList'

import { Container } from '@material-ui/core'

const mapDispatchToProps = dispatch => bindActionCreators({ setTasks }, dispatch)

const App = props => {
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
    const task = tasks.find(task => task._id === id)
    const newTasks = tasks.map(task => {
      if (task._id === id) {
        task.done = !task.done
      }
      return task
    })
    setTasks(newTasks)
    api.put(`/tasks/${id}`, { done: task.done }).catch(error => {
      const oldTasks = tasks.map(task => {
        if (task._id === id) {
          task.done = !task.done
        }
        return task
      })
      setTasks(oldTasks)
    })
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
      props.setTasks(response.data)
    })
  }, [])

  return (
    <Container>
      <h1>Tarefas</h1>
      <NewTask />
      <TasksList
        markAsDone={handleMarkAsDone}
        deleteTask={handleDeleteTask}
      />
    </Container>
  )
}

export default connect(null, mapDispatchToProps)(App)
