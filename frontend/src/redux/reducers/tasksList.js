export default (state = [], action) => {
  const possibleActions = {
    SET_TASKS: () => action.payload,

    ADD_NEW_TASK: () => [
      action.payload,
      ...state
    ],

    UPDATE_NEW_TASK: () => [
      action.payload.newTask,
      ...action.payload.oldTasks
    ],

    MARK_AS_DONE: () => {
      return state.map(task => {
        if (task._id === action.payload) {
          task.done = !task.done
        }
        return task
      })
    },

    DELETE_TASK: () => {
      return state.filter(task => task._id !== action.payload)
    }
  }

  const possibleAction = possibleActions[action.type]
  if (possibleAction === undefined) {
    return state
  }

  return possibleAction()
}