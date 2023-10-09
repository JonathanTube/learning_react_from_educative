import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import CssModules from './CssModules'
import ClassNames from './ClassNames'
import SVG from './SVG'

export default function Menu() {
  return (
    <BrowserRouter>
      <div className='Sub-Menu'>
        <Link to="/">Css Modules</Link>
        <Link to="/classNames">thridpart modules: classnames</Link>
        <Link to="/svg">svg</Link>
      </div>

      <div className='Main-Content'>
        <Routes>
          <Route path='/' element={<CssModules />} />
          <Route path='/classNames' element={<ClassNames />} />
          <Route path='/svg' element={<SVG />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}