import { combineReducers } from 'redux'

import newTask from './newTask'
import tasksList from './tasksList'

export default combineReducers({ newTask, tasksList })
