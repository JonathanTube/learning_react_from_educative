import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import ReactProps from "./ReactPropsInFunctionComponent.tsx"
import ReactComponentState from "./ReactStateInFunctionComponent.tsx"
import ReactUseReducer from "./ReactUseReducerInFunctionComponent.tsx"
import ReactClassComponentProps from "./ReactPropsInClassComponent.tsx"
import ReactClassComponentState from "./ReactStateInClassComponent.tsx"
import ReactComponentEvent from "./ReactEventInFunctionComponent.tsx"
import ReactComponentSimpleContext from "./ReactSimpleContextInFunctionComponent.tsx"
import ReactComponentComplexContext from "./ReactComplexContextInFunctionComponent.tsx"
import ReactFunctionComponentRefs from "./ReactRefsInFunctionComponent.tsx"
import ReactClassComponentRefs from "./ReactRefsInClassComponent.tsx"
import ReactSimpleContextInClassComponent from "./ReactSimpleContextInClassComponent.tsx"
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
        <Link to="/reactComponentSimpleContext">
          Creating a simple strongly-typed context for function components
        </Link>
        <Link to="/reactComponentComplexContext">
          Creating a complex strongly-typed context for function components
        </Link>
        <Link to="/reactFunctionComponentRefs">
          Creating strongly-typed refs in function components
        </Link>
        <Link to="/reactClassComponentRefs">
          Creating strongly-typed refs in class components
        </Link>
        <Link to="/reactSimpleContextInClassComponent">
          Consuming a context in a strongly-typed class component
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
          <Route
            path="/reactComponentSimpleContext"
            element={<ReactComponentSimpleContext />}
          />
          <Route
            path="/reactComponentComplexContext"
            element={<ReactComponentComplexContext />}
          />
          <Route
            path="/reactFunctionComponentRefs"
            element={<ReactFunctionComponentRefs />}
          />
          <Route
            path="/reactClassComponentRefs"
            element={<ReactClassComponentRefs />}
          />

          <Route
            path="/reactSimpleContextInClassComponent"
            element={<ReactSimpleContextInClassComponent />}
          />

          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
