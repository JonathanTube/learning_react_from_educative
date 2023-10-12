import React from "react"

const Counter = ({ incrementStep, decrementStep, initialCount }) => {
  type State = {
    count: number
  }
  // Define four different types of Action
  type Increment = {
    readonly type: "increment"
    readonly incrementStep: number
  }

  type Decrement = {
    readonly type: "decrement"
    readonly decrementStep: number
  }

  type Double = {
    readonly type: "double"
  }

  type Reset = {
    readonly type: "reset"
  }

  type Action = Increment | Decrement | Double | Reset

  // The reducer is always returning a state
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "increment":
        // this is pretty smart, awsome!
        return { count: state.count + action.incrementStep }
      case "decrement":
        return { count: state.count - action.decrementStep }
      case "double":
        return { count: state.count * 2 }
      case "reset":
        return { count: initialCount }
      default:
        // We can use the never type in the switch statement’s default branch to tell the TypeScript compiler that this should never be reached:
        neverReached(action)
    }
    return state
  }
  const neverReached = (never: never) => {}

  const doubleResetInitialCount = (initialCount: number): State => ({
    count: initialCount * 2,
  })

  const [state, dispatch] = React.useReducer(
    // Here you can pass three arguments
    reducer, // your reducer
    100, // initial value
    doubleResetInitialCount // do something for the initial and then return a new state
  )

  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "increment", incrementStep })}>
        Add {incrementStep}
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "decrement", decrementStep })}>
        Subtract {decrementStep}
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "double" })}>Double</button>
      &nbsp;
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  )
}

export default function ReactUseReducer() {
  return <Counter incrementStep={1} decrementStep={3} initialCount={0} />
}
