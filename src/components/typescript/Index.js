import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import ReactProps from "./ReactFunctionComponentProps.tsx"
import ReactComponentState from "./ReactFunctionComponentState.tsx"
import ReactUseReducer from "./ReactFunctionComponentUseReducer.tsx"
import ReactClassComponentProps from "./ReactClassComponentProps.tsx"
import ReactClassComponentState from "./ReactClassComponentState.tsx"
import ReactComponentEvent from "./ReactComponentEvent.tsx"
import Exercise from "./Exercise.tsx"

export default function Menu() {
  return (
    <BrowserRouter>
      <div className="Sub-Menu">
        <Link to="/">Creating strongly-typed function component props</Link>
        <Link to="/reactComponentState">
          Creating strongly-typed function component states with useState
        </Link>
        <Link to="/reactUseReducer">
          Creating strongly-typed function component state with useReducer
        </Link>
        <Link to="/reactClassComponentProps">
          Creating strongly-typed class props
        </Link>
        <Link to="reactClassComponentState">
          Creating strongly-typed class state
        </Link>
        <Link to="reactComponentEvent">
          Creating strongly-typed component events and event handlers
        </Link>

        <Link to="/exercise">Exercise</Link>
      </div>

      <div className="Main-Content">
        <Routes>
          <Route path="/" element={<ReactProps />} />
          <Route
            path="/reactComponentState"
            element={<ReactComponentState />}
          />
          <Route path="/reactUseReducer" element={<ReactUseReducer />} />
          <Route
            path="/reactClassComponentProps"
            element={<ReactClassComponentProps />}
          />
          <Route
            path="/reactClassComponentState"
            element={<ReactClassComponentState />}
          />
          <Route
            path="/reactComponentEvent"
            element={<ReactComponentEvent />}
          />
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
