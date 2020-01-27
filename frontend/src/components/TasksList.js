import React from 'react'

import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFFFFF'
  }
})

export default function TasksList(props) {
  const classes = useStyles()

  return (
    <List>
      {
        props.tasks.map(task => (
          <ListItem
            key={task._id}
            role={undefined}
            className={classes.root}
            dense button
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={task.done}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': task._id }}
                onClick={() => props.markAsDone(task._id)}
              />
            </ListItemIcon>
            <ListItemText id={task._id} primary={task.description} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => props.deleteTask(task._id)}
              >
                <DeleteForever />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      }
    </List>
  )
}
