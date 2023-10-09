import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
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
import Reusable from './Reusable'
import MyComposition from './Composition'
import Ref from './Ref'
import InlineHandler from './InlineHandler'
import Asynchronous from './Asynchronous'
import Conditional from './Conditional'
import UseReducer from './UseReducer'
import UseReducerComposition from './UseReducerComposition'
import Fetch from './Fetch'
import UseCallback from './UseCallback'
import AxiosDemo from './Axios'
import FormDemo from './Form'

export default function Menu() {
  return (
    <BrowserRouter>
      {/* the style name must be humped but the style values are as same as the origin style */}
      <div className='Sub-Menu'>
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
        <Link to="/resuable">resuable</Link>
        <Link to="/composition">composition</Link>
        <Link to="/ref">ref</Link>
        <Link to="/inlineHandler">inlineHandler</Link>
        <Link to="/asynchronous">asynchronous</Link>
        <Link to="/conditional">conditional</Link>
        <Link to="/useReducer">useReducer</Link>
        <Link to="/useReducerComposition">useReducerComposition</Link>
        <Link to="fetch">fetch</Link>
        <Link to="useCallback">useCallback</Link>
        <Link to="axiosDemo">axios</Link>
        <Link to="formDemo">form</Link>
      </div>

      {/* using the inline style in JSX */}
      <div className='Main-Content'>
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
          <Route path='/resuable' element={<Reusable />} />
          <Route path="/composition" element={<MyComposition />} />
          <Route path="/ref" element={<Ref />}></Route>
          <Route path="/inlineHandler" element={<InlineHandler />} />
          <Route path="/asynchronous" element={<Asynchronous />} />
          <Route path="/conditional" element={<Conditional />} />
          <Route path="/useReducer" element={<UseReducer />} />
          <Route path="/useReducerComposition" element={<UseReducerComposition />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/useCallback" element={<UseCallback />} />
          <Route path="/axiosDemo" element={<AxiosDemo />} />
          <Route path="/formDemo" element={<FormDemo />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}