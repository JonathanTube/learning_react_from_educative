import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ReactProps from './ReactProps.tsx'
export default function Menu() {
  return (
    <BrowserRouter>
      <div className='Sub-Menu'>
        <Link to="/">ReactProps</Link>
      </div>

      <div className='Main-Content'>
        <Routes>
          <Route path='/' element={<ReactProps />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}