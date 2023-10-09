import React from 'react';
import './App.css';

import FundamentalsIndex from './components/fundamentals/Index'
import LegacyIndex from './components/legacy/Index'
import StylingIndex from './components/styling/Index'
import ChallengeIndex from './components/challenge/Index'

// We would say this is a functional component.
function App() {
  const [list] = React.useState(['Fundamentals', 'Legacy', 'Styling', 'Challenge'])
  const [idx, setIdx] = React.useState(0)
  const onChange = (index) => {
    setIdx(index)
  }
  return (
    // the code below is called JSX.
    <div className='App'>
      <div className='Menu'>
        {list.map((item, index) => {
          return <div className={`Item ${idx === index ? 'Item-Active' : ''}`} key={index} onClick={() => onChange(index)}>{item}</div>
        })}
      </div>
      {idx === 0 && <FundamentalsIndex />}
      {idx === 1 && <LegacyIndex />}
      {idx === 2 && <StylingIndex />}
      {idx === 3 && <ChallengeIndex />}
    </div>
  );
}

export default App