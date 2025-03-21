// import {   useState } from 'react'
import './App.css'
import { useTodo } from './todo_component'; 
import AppHeader from './components/app_header.jsx';
import ToDoGroup from './components/todo_group.jsx';
// export groups ;

function App() {
  // eslint-disable-next-line react-refresh/only-export-components
    // const updateToDos = (groupName) => {
    //   setToDo([...groups, { 'categorie': groupName, entries: [] }]);
    // };
    const groups = useTodo();
  // Funktion zum Hinzufügen eines neuen Todos
  // const addNewTodo = () => {
  //   if (newTodo.trim() !== "" && newCategory.trim() !== "") {
  //     const updatedGroups = groups.map(group => {
  //       if (group.categorie === newCategory) {
  //         return {
  //           ...group,
  //           entries: [
  //             ...group.entries,
  //             { name: newTodo, isFinished: false }
  //           ]
  //         };
  //       }
  //       return group;
  //     });
  //     setToDo(updatedGroups);
  //     setNewTodo(""); // Eingabefeld für den ToDo-Text zurücksetzen
  //     setNewCategory(""); // Eingabefeld für die Kategorie zurücksetzen
  //   }
  // };
// const updateToDos = (groupName) => {
//   setToDo([...groups, {'categorie': groupName,entries:[]}])
// };
 return (
    <div>
      <h1>Yan&rsquo;s todoliste</h1>
      <AppHeader  />
      {/* Eingabe für das neue Todo */}
      {/* <div>
        <input
          type="text"
          placeholder="Neues Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Kategorie"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={addNewTodo}>Hinzufügen</button>
      </div> */}

      {/* ToDo-Gruppen anzeigen */}
      <div>
        {groups.groups.map((group, index) => (
          <ToDoGroup key={index} group={group} />
        ))}
      </div>
    </div>
  );
}

//   return (
  
//       <div >
//       <h1>Yan&rsquo;s todoliste</h1>
//       <div>
//         {/* <div className='TodayComponent'> */}
//          <AppHeader/>
//           {/* // Ich brauche eine liste mit Categorien oder mit allen todos.
//           // Diese Liste muss ich dann */}
//           {
//             groups.map((groupe,index) => (
//               <ToDoGroup key= {index} group= {groupe} onClick={doSomething} />
//             ))
//           }
        
//         </div>
//       </div>
    
//   )
// }
export default App
