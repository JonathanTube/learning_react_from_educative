import { legacy_createStore as createStore } from "redux"
import reducer from "../reducers/index"

// as the same as {contact:contact}
// the second paramter as a default value of the state is not necessary.
const store = createStore(reducer)
export default store
