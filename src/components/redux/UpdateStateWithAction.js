import { useState } from "react"
import store from "./store/UpdateStateWithActionStore"

const ComponentA = () => {
  const { name } = store.getState()

  const [age, setAge] = useState(0)

  store.subscribe(() => {
    // subscribe the change of state
    // if there is a change the nested function will be executed.
    const { age } = store.getState()
    setAge(age)
  })

  return (
    <div>
      name:{name}; age = {age}
    </div>
  )
}
const onClick = (actionType) => {
  store.dispatch({
    type: actionType,
  })
}

const ComponentB = () => {
  return (
    <>
      <input
        type="button"
        value="increase age"
        onClick={() => onClick("INCREASE_AGE")}
      />
      &nbsp;
      <input
        type="button"
        value="descrease age"
        onClick={() => onClick("DECREASE_AGE")}
      />
    </>
  )
}

export default function UpdateStateWithAction() {
  return (
    <>
      <ComponentA />
      &nbsp;
      <ComponentB />
    </>
  )
}
