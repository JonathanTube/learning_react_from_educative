import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import HelloWorld from "./HelloWorld.js"
import ExerciseUserCard from "./ExerciseUserCard.js"
import UpdateStateWithAction from "./UpdateStateWithAction.js"
import ExerciseBankApplication from "./ExerciseBankApplication.js"
import ExerciseTimeCounter from "./ExerciseTimeCounter.js"
import Skypey from "./skypeyApp/App.js"

export default function Menu() {
  return (
    <BrowserRouter>
      <div className="Sub-Menu">
        <Link to="/">Hello world for Redux</Link>
        <Link to="/userCard">User Card Exercise</Link>
        <Link to="/updateStateWithAction">update state with action</Link>
        <Link to="/ExerciseBankApplication">Bank Application Exercise</Link>
        <Link to="/ExerciseTimeCounter">Time Counter Exercise</Link>
        <Link to="/Skypey">Skypey Demo App</Link>
      </div>

      <div className="Main-Content">
        <Routes>
          <Route path="/" element={<HelloWorld />} />
          <Route path="/userCard" element={<ExerciseUserCard />} />
          <Route
            path="/updateStateWithAction"
            element={<UpdateStateWithAction />}
          />
          <Route
            path="/ExerciseBankApplication"
            element={<ExerciseBankApplication />}
          />
          <Route
            path="/ExerciseTimeCounter"
            element={<ExerciseTimeCounter />}
          />
          <Route path="/Skypey" element={<Skypey />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
