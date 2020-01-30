import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { renameNewTask, addNewTask } from '../redux/actions'

import { Paper, IconButton, InputBase } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  input: {
    flexGrow: 1,
    marginLeft: 15
  }
})

const mapStateToProps = state => ({ newTask: state.newTask, tasks: state.tasksList })
const mapDispatchToProps = dispatch => bindActionCreators({ renameNewTask, addNewTask }, dispatch)

const NewTask = props => {
  const classes = useStyles()

  const handleSubmit = event => {
    event.preventDefault()
    props.addNewTask(props.newTask, props.tasks)
    props.renameNewTask('')
  }

  const handleKeyUp = event => {
    const keys = {
      Escape: () => {
        props.renameNewTask('')
      }
    }
    const keyFunction = keys[event.key]
    if (keyFunction !== undefined) {
      keyFunction()
    }
  }

  return (
    <Paper className={classes.root} component="form" onSubmit={handleSubmit}>
      <InputBase
        value={props.newTask}
        className={classes.input}
        placeholder="Adicionar tarefa"
        inputProps={{ 'aria-label': 'adicionar tarefa' }}
        onChange={props.renameNewTask}
        onKeyUp={handleKeyUp}
      />
      <IconButton type="submit" aria-label="search">
        <Add />
      </IconButton>
    </Paper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTask)