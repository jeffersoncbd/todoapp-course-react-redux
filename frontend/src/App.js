import React, { useEffect } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setTasks } from './redux/actions'

import NewTask from './components/NewTask'
import TasksList from './components/TasksList'

import { Container } from '@material-ui/core'

const mapDispatchToProps = dispatch => bindActionCreators({ setTasks }, dispatch)

const App = props => {
  useEffect(() => {
    props.setTasks()
  })

  return (
    <Container>
      <h1>Tarefas</h1>
      <NewTask />
      <TasksList />
    </Container>
  )
}

export default connect(null, mapDispatchToProps)(App)
