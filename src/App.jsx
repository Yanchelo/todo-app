// import {   useState } from 'react'
import './App.css'
import { useTodo } from './todo_component'; 
import AppHeader from './components/app_header.jsx';
import ToDoGroup from './components/todo_group.jsx';
// export groups ;

export default function App() {

    const groups = useTodo();

 return (
    <div>
      <h1>Yan&rsquo;s todoliste</h1>
      <AppHeader />
      {/* ToDo-Gruppen anzeigen */}
      <div>
        {groups.groups.map((group, index) => (
          <ToDoGroup key={index} group={group} />
        ))}
      </div>
    </div>
  );
}

