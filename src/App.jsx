/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Profile from './profile.jsx'
import TodayComponent from './Today.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <Profile/> */}
      <h1>Vite + React</h1>
      <h3>Dies ist Yan's erste React App</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count * 9)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      {/* <div className='TodayComponent'> */}
      <TodayComponent/>
      </div>
      <Profile/>
      
    </>
  )
}
export default App
