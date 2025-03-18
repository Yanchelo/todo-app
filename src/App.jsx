// import { useState } from 'react'
import './App.css'
// import todos from './todo.json';
import AppHeader from './components/app_header.jsx';

function App() {
  // const [count, setCount] = useState(1)
const mainStyle={
  height:'auto'
};
  return (
    <>
      <div style={mainStyle}>

      {/* <Profile/> */}
      <h1>Yan&rsquo;s todoliste</h1>
   
     
      <div>
      {/* <div className='TodayComponent'> */}
      <AppHeader    />
      {/* {
        // Ich brauche eine liste mit Categorien oder mit allen todos.
        // Diese Liste muss ich dann
        todos.map((group)  =>   <ToDoGroup {group}/>
        )
      } */}
      </div>
      {/* <Profile/> */}
      </div>
      
    </>
  )
}
export default App
   {/* <div className="card">
        <button onClick={() => setCount((count) => count * 9)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}