import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteTask } from '../redux/actions'

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
  },
  done: {
    color: '#CCCCCC',
    textDecoration: 'line-through'
  }
})

const mapStateToProps = state => ({ tasks: state.tasksList })
const mapDispatchToProps = dispatch => bindActionCreators({ deleteTask }, dispatch)

const TasksList = props => {
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
                color="primary"
                inputProps={{ 'aria-labelledby': task._id }}
                onClick={() => props.markAsDone(task._id)}
              />
            </ListItemIcon>
            <ListItemText
              id={task._id}
              primary={task.description}
              className={task.done ? classes.done : ''}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => props.deleteTask(task._id, props.tasks)}
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

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)