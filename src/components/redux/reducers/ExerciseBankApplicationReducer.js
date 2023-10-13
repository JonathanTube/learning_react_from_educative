const reducer = (state, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        totalAmount: state.totalAmount - action.totalAmount,
      }

    case "WITHDRAW":
      return {
        ...state,
        totalAmount: state.totalAmount - action.totalAmount,
      }
    default:
      return state
  }
}
export default reducer
