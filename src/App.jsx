import { useState } from 'react'
import './App.css'
import * as todos from './todo.json';
import AppHeader from './components/app_header.jsx';
import ToDoGroup from './components/todo_group.jsx';

function App() {
  const [groups, setToDo] = useState(todos["todos"]);

const doSomething = () =>{ 
  setToDo( );
};

  return (
  
      <div >
      <h1>Yan&rsquo;s todoliste</h1>
      <div>
        {/* <div className='TodayComponent'> */}
         <AppHeader/>
          {/* // Ich brauche eine liste mit Categorien oder mit allen todos.
          // Diese Liste muss ich dann */}
          {
            groups.map((groupe,index) => (
              <ToDoGroup key= {index} group= {groupe} />
            ))
          }
        
        </div>
      </div>
    
  )
}
export default App
