import '../App.css';
import arrowUp from '../assets/up-arrow-white.png';
import { useState } from 'react';
import AddToDo from '../components/add_todo'
import add from '../assets/plus-icon.png';
import { useTodo } from '../todo_component'; 


export default function CreateGroup(){

    let [ isActive, setActive] = useState(false);
    const { updateToDos } = useTodo();
    const[text, setState]= useState('');

    let myStyle = {
        fontSize: '24',
        height:'30px',
        padding:'10px 0px 15px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor:'#28AA00',
    };
    const headerStyle = {
        backgroundColor:'#28AA00',
        display: 'flex',
        flexDirection: 'column',
        height:'100px',
        fontSize: '24px',
    };

    const titleStyle={ height: 'fit-content'}

    const inputStyle = {
        height: '35px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: '1px solid #ccc',
        borderRadius: '12px',
        outline: 'none',
        color:'rgb(80, 80, 80)',
        transition: 'border-color 0.3s',
        padding:'0px 8px',
    };

    const handleAddClick = () => {
        let newTitle = text.trim();
        if (!newTitle) return;
        
        updateToDos(newTitle);
       
    };

  const  onclicked =()=>{
    setActive(!isActive)

    return;
   }

return ( 
    <div style={headerStyle} >
        <div className= 'row'style={myStyle} >
            { /* Title vom ToDo Trenner */}
            <div style = {titleStyle} >
                Create a Group
            </div> 
            {/* Zweites Element, ist ein Div um die UI zu stylen */}
                {/* <img src={arrowUp} className='iconStyle'  alt="Open" onClick = {onclicked}   />                       */}
        </div>
        <div className="row"  >
            <input
                style={inputStyle}
                type="text"
                value={text}
                onChange={ (e)=> setState(e.target.value)}
                placeholder="Gib etwas ein..."
            />
            <div
                onClick={handleAddClick}
                role="button"
                aria-label="Add to-do"
            >
                <img src={add} alt="+" className='iconStyle' />
          </div>
        </div>
    </div>
 );
}
