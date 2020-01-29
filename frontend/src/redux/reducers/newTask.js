export default (state = '', action) => {
  const possibleActions = {
    UPDATE_NEW_TASK: () => action.payload
  }

  const possibleAction = possibleActions[action.type]
  if (possibleAction === undefined) {
    return state
  }

  return possibleAction()
}