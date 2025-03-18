import magnifyingIcon from '../assets/search-icon-white.png'
import addIcon from '../assets/white-down-arrow.png'
import AddToDo from './add_todo';
import '../App.css';
import { useState } from 'react';
import ToDoHeader from '../TodoHeader';


export default function AppHeader(){
    // State's
const [groupname, setName] = useState('');

const [isEditing, setIsEditing] = useState(false);
    //Style's
let myStyle = {
    fontSize: '28px',
    height:'70px',
    width: '402px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
};
    const headerStyle = {
       
        backgroundColor:'green',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        height:'70px',
        width:'402px'
    };

 
    //Method's
    const searchOption = ()=>{


    };

    const openTab = () => {
        console.log('change state= '+ isEditing)
        setIsEditing(!isEditing);
    }
    // Component
      return <div style={headerStyle} >
                <div className= 'row' style={myStyle} >
                    { /* Title vom ToDo Trenner */}
                    <div style={{marginLeft:'20px'}} >
                        {'To-Do List'}
                    </div> 
                    {/* Zweites Element, ist ein Div um die UI zu stylen */}
                
                    <div>
                    
                        <img src={magnifyingIcon} width={36} height={36} style={{ margin: '7px 20px 7px 0px' }} alt="Garbage"onClick={searchOption}  />                      
                        <img src={addIcon} width={36} height={36} style={{ margin: '7px 20px 7px 0px' }} alt="Garbage"onClick={openTab} />
                  
                    </div>    
                </div>
                      {
                        isEditing ?? <ToDoHeader
                              title = 'Create new group'
                              fontSize = '24px'
                              height = '100px'
                              width = '100%'
                              margin = '10px 20px'
                         />
                      }
                 {/* <AddToDo todoText ={todoText} setText = {setText} /> */}
            </div>
 

}
