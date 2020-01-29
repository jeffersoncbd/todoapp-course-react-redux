export const setTasks = tasks => ({
  type: 'SET_TASKS',
  payload: tasks
})

export const updateNewTask = event => ({
  type: 'UPDATE_NEW_TASK',
  payload: event.target === undefined ? event : event.target.value
})

export const addNewTask = task => ({
  type: 'ADD_NEW_TASK',
  payload: task
})
