import { legacy_createStore as createStore } from "redux"
import ExerciseUserCardReducer from "../reducers/ExerciseUserCardReducer.js"

const initialState = {
  name: "Alex Bakery",
  description: "Software Engineer, Speaker, and Occasional Model",
  likes: "Cats, Wine, and Black dresses",
  location: "localhost",
}
const state = createStore(ExerciseUserCardReducer, initialState)
export default state
