
import PropTypes from 'prop-types';
import '../App.css';
import arrowDown from  '../assets/white-down-arrow.png';
import drash from '../assets/delete-png-red.png'
import arrowUp from '../assets/up-arrow-white.png';
import { useState } from 'react';
import AddToDo from './add_todo'
import { useTodo } from '../todo_component'; 




export default function ToDoHeader( {title}){
    let [ isActive, setActive] = useState(false);
    const { deleteCategory } = useTodo();
  

    const headerStyle = {
        margin: '0 auto',
        backgroundColor:'green',
        // cursor: isActive ? 'pointer' : 'not-allowed',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        height:isActive? '110px' :'80px',
    };

  const  onclicked =()=>{
    setActive(!isActive)
   }
const deleteOption = ()=>{
    if(isActive){
        setActive(!isActive);
        setText('');
        return;
    }
    deleteCategory(title)

    return;
}

return <div style={headerStyle} >
            <div className= 'row'>
                { /* Title vom ToDo Trenner */}
                <h3  > { title } </h3>  
                {/* Zweites Element, ist ein Div um die UI zu stylen */}
                <div style={{marginTop: '15px'}}>
                    <img src={drash} className='iconStyle' alt="Garbage"onClick={deleteOption}  />
                        {/* <button style={{ display: "none"}}>  */}
                    
                            <img src={isActive? arrowDown: arrowUp}className='iconStyle' alt="Open" onClick = {onclicked} /> 
                            {/* <img src={arrowUp} className='iconStyle' alt="Open" onClick = {onclicked} /> */}
                    
                {/* </button> */}
            </div>    
        </div>
        {isActive && <AddToDo categorie = { title }  />}
    </div>
 
}
ToDoHeader.propTypes = {
    title: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
}


