import Home from './Home'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ReactJSX from './FirstComponent'
import JSX from './JSX'
import Lists from './Lists'
import Event from './Event'
import Props from './Props'
import UseState from './UseState'
import Callback from './Callback'
import UseEffect from './UseEffect'
import CustomHook from './CustomHook'
import Fragments from './Fragments'

export default function Menu() {
  return (
    <BrowserRouter>
      {/* the style name must be humped but the style values are as same as the origin style */}
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/react_jsx">First Component</Link>
        <Link to='/jsx'>JSX</Link>
        <Link to="/lists">Lists</Link>
        <Link to="/event">Events</Link>
        <Link to="/props">Props</Link>
        <Link to="/use_state">useState</Link>
        <Link to="/callback">callback</Link>
        <Link to="/use_effect">useEffect</Link>
        <Link to="/custom_hook">customHook</Link>
        <Link to="/fragments">Fragments</Link>
      </div>

      {/* using the inline style in JSX */}
      <div style={{ marginTop: '120px' }}>
        <Routes>
          {/* after the element tag, there must be React component as <element/> instead of 'element' */}
          <Route path='/' element={<Home />} />
          <Route path='/react_jsx' element={<ReactJSX />} />
          <Route path='/jsx' element={<JSX />} />
          <Route path='/lists' element={<Lists />} />
          <Route path='/event' element={<Event />} />
          <Route path='/props' element={<Props />} />
          <Route path='/use_state' element={<UseState />} />
          <Route path='/callback' element={<Callback />} />
          <Route path='/use_effect' element={<UseEffect />} />
          <Route path='/custom_hook' element={<CustomHook />} />
          <Route path='/fragments' element={<Fragments />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}