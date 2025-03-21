// import ToDoHeader from '../TodoHeader';
import { useState } from 'react';
import ToDoCard from './todo_card';
import { PropTypes } from 'prop-types';
import ToDoHeader from '../TodoHeader'

export default function ToDoGroup({ group }) {
  const [todos,setToDos] = useState(group);

// const updateGroup = (name) => {
// const oldTodos = todos.entries;
// const newTodos = oldTodos.filter((e)=> e.name != name );
//   setToDos(newTodos);
// }
// const addToDo = (name) => {
// const oldTodos = todos.entries;
// const newTodos = oldTodos.filter((e)=> e.name != name );
//   setToDos(newTodos);
// }
  return (
    <div>
             <ToDoHeader title = { String(todos.categorie)}   />
             {
                todos.entries.map((entry,index) => {      
                  console.log(entry.name)          
                  return   <ToDoCard 
                         key = {index}
                         title = {String(entry.name)} 
                         isFinished = {entry.isFinished} 
                        
                     />
                 })
             }
     </div>
  );
}
ToDoGroup.propTypes = {
  group: PropTypes.shape({
    categorie: PropTypes.string.isRequired,
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        isFinished: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
// <div>
//   <h3>{todos.categorie}</h3>
//   {todos.entries.length === 0 ? (
//     <p>Keine Todos in dieser Kategorie.</p>
//   ) : (
//     todos.entries.map((entry, index) => (
//       // Hier müssen die Todoes verwaltete werden
//       <ToDoCard key={index} title={entry.name} isActive={entry.isFinished} deleteFunc = {updateGroup(entry.name) } />
//     ))
//   )}
// </div>



// export default function ToDoGroup({group}){ 
// return (
//     <div>
//         <ToDoHeader title= {group.categorie} />
//         { Array.isArray&&
//             group.entries.map((entry,index) => {                
//              return   <ToDoCard 
//                     key = {index}
//                     title = {entry.name} 
//                     isFinished = {entry.isFinished} 
                    
//                 />
//             })
//         }
// </div>);