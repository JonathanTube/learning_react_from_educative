import Home from './Home'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ReactJSX from './FirstComponent'
import JSX from './JSX'
import LISTS from './Lists'
import EVENT from './Event'

export default function Menu() {
  return (
    <BrowserRouter>
      {/* the style name must be humped but the style values are as same as the origin style */}
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/react_jsx">First Component</Link>
        <Link to='/jsx'>JSX</Link>
        <Link to="/lists">LISTS</Link>
        <Link to="/event">EVENT</Link>
      </div>

      {/* using the inline style in JSX */}
      <div style={{ marginTop: '120px' }}>
        <Routes>
          {/* after the element tag, there must be React component as <element/> instead of 'element' */}
          <Route path='/' element={<Home />} />
          <Route path='/react_jsx' element={<ReactJSX />} />
          <Route path='/jsx' element={<JSX />} />
          <Route path='/lists' element={<LISTS />} />
          <Route path='/event' element={<EVENT />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}