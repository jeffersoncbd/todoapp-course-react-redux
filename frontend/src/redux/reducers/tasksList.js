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