// import { useState } from 'react';
// import {todos} from './todo.json';
import ToDoHeader from './TodoHeader';
import './App.css';

// eslint-disable-next-line react/prop-types
// export default function TodayComponent({todos}){
export default function TodayComponent(){

//   const [todo, setToDo] = useState(todos);
//   const updateToDo = (updatetedTodO)=> {
//     let newToDo = todo.map((e)=>{

//       if(e.id== updatetedTodO.id){
// return updatetedTodO;
//       }else{
//         return e;
//       }
//     })
//   }

  return  <ToDoHeader
        title = 'To-Do-List'
        fontSize = '24px'
        height= '50%' 
        width= '100%' 
        margin='7px 5px 7px 20px' 
        // margin= '70px' '5px' '7px' '20px'
       
    />
    // function ToDoHeader({ title, fontSize, height, width, margin }) {
    //   return (
    //     <div style={{ fontSize, height, width, margin }}>
    //       {title}
    //     </div>
    //   );
    // }
}
