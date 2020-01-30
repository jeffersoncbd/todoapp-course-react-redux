export default (state = '', action) => {
  const possibleActions = {
    RENAME_NEW_TASK: () => action.payload
  }

  const possibleAction = possibleActions[action.type]
  if (possibleAction === undefined) {
    return state
  }

  return possibleAction()
}