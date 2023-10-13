import HelloWorldReducer from "./reducers/HelloWorldReducer"
import React from "react"
// duplicated
import { legacy_createStore as createStore } from "redux"

const inital = { tech: "React" }
const store = createStore(HelloWorldReducer, inital)
export default function HelloWorld() {
  const { tech } = store.getState()
  return (
    <div>
      <div>{store.getState().tech}</div>
      <div>{tech}</div>
    </div>
  )
}
