import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Sorting from './Sorting'
import SearchHistories from './SearchHistories'


export default function Menu() {
  return (
    <BrowserRouter>
      <div className='Sub-Menu'>
        <Link to="/">Sorting</Link>
        <Link to="/searchHistories">Search Histories</Link>
      </div>

      <div className='Main-Content'>
        <Routes>
          <Route path='/' element={<Sorting />} />
          <Route path='/searchHistories' element={<SearchHistories />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}