import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ClassComponents from './ClassComponents'
import OldState from './OldState'
import CreateRefDemo from './CreateRef'

export default function Menu() {
  return (
    <BrowserRouter>
      <div className='Sub-Menu'>
        <Link to="/">ClassComponents</Link>
        <Link to="/oldState">oldState</Link>
        <Link to="/createRef">createRef</Link>
      </div>

      <div className='Main-Content'>
        <Routes>
          <Route path='/' element={<ClassComponents />} />
          <Route path='/oldState' element={<OldState />} />
          <Route path='/createRef' element={<CreateRefDemo />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}