export default (state = [], action) => {
  const possibleActions = {
    SET_TASKS: () => action.payload,

    ADD_NEW_TASK: () => [
      {
        _id: new Date(),
        description: action.payload,
        done: false
      },
      ...state
    ]
  }

  const possibleAction = possibleActions[action.type]
  if (possibleAction === undefined) {
    return state
  }

  return possibleAction()
}