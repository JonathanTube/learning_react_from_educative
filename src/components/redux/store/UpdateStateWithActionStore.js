import { legacy_createStore as createStore } from "redux"

import reducer from "../reducers/UpdateStateWithActionReducer"

const initial = {
  name: "nobody",
  age: -1,
}
const store = createStore(reducer, initial)

export default store
