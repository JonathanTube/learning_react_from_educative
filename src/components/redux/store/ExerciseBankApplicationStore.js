import { legacy_createStore as createStore } from "redux"

import reducer from "../reducers/ExerciseBankApplicationReducer"

const initial = {
  username: "Janny",
  totalAmount: 2500701,
}
const store = createStore(reducer, initial)

export default store
