// This just likes dao layers.
import { legacy_createStore as createStore } from "redux"
import reducer from "../reducers/ExerciseTimeCounter"
const initialState = {
  days: 11,
  hours: 31,
  minutes: 27,
  seconds: 11,
  activeSession: "DAYS"
}

const store = createStore(reducer, initialState)

export default store
