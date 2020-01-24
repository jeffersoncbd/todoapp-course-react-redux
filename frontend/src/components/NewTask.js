import React, { useState } from 'react'

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

export default function NewTask(props) {
  const classes = useStyles()

  const [newTask, setNewTask] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    props.addNewTask(newTask)
    setNewTask('')
  }

  return (
    <Paper className={classes.root} component="form" onSubmit={handleSubmit}>
      <InputBase
        value={newTask}
        className={classes.input}
        placeholder="Adicionar tarefa"
        inputProps={{ 'aria-label': 'adicionar tarefa' }}
        onChange={event => setNewTask(event.target.value)}
      />
      <IconButton type="submit" aria-label="search">
        <Add />
      </IconButton>
    </Paper>
  )
}