const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_AGE":
      return {
        //You should not mutate the state received in your Reducer. Instead, you should always return a new copy of the state.
        ...state,
        age: state.age + 1,
      }

    case "DECREASE_AGE":
      return {
        ...state,
        age: state.age - 1,
      }
    default:
      return state // Here must return a default state otherwise raises an error
  }
}
export default reducer
