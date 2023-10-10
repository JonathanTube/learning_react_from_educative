import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ReactProps from './ReactProps.tsx'
import ReactComponentState from './ReactComponentState.tsx'

export default function Menu() {
  return (
    <BrowserRouter>
      <div className='Sub-Menu'>
        <Link to="/">ReactProps</Link>
        <Link to="/reactComponentState">ReactComponentState</Link>
      </div>

      <div className='Main-Content'>
        <Routes>
          <Route path='/' element={<ReactProps />} />
          <Route path='/reactComponentState' element={<ReactComponentState />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}