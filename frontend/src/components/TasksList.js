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

export default function TasksList(props) {
  return (
    <List>
      {
        props.tasks.map(task => (
          <ListItem key={task._id} role={undefined} dense button>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={task.done}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': task._id }}
              />
            </ListItemIcon>
            <ListItemText id={task._id} primary={task.description} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <DeleteForever />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      }
    </List>
  )
}
