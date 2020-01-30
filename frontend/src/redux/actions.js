import api from '../services/api'

export const setTasks = () => {
  return dispatchEvent => {
    api.get('/tasks?sort=-createdAt')
      .then(response => {
        dispatchEvent({
          type: 'SET_TASKS',
          payload: response.data
        })
      })
  }
}

export const updateNewTask = event => ({
  type: 'RENAME_NEW_TASK',
  payload: event.target === undefined ? event : event.target.value
})

export const addNewTask = (taskDescription, oldTasks) => {
  return dispatch => {
    dispatch({
      type: 'ADD_NEW_TASK',
      payload: {
        _id: new Date(),
        description: taskDescription,
        done: false
      }
    })
    api.post('/tasks', { description: taskDescription })
      .catch(() => {
        dispatch({
          type: 'SET_TASKS',
          payload: oldTasks
        })
      })
      .then(response => {
        if (response !== undefined) {
          console.log(response.data)
          dispatch({
            type: 'UPDATE_NEW_TASK',
            payload: {
              newTask: response.data, oldTasks
            }
          })
        }
      })
  }
}
