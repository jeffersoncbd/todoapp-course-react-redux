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
    ]
  }

  const possibleAction = possibleActions[action.type]
  if (possibleAction === undefined) {
    return state
  }

  return possibleAction()
}