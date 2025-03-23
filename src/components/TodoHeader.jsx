
import PropTypes from 'prop-types';
import './App.css';
import arrowDown from './assets/white-down-arrow.png';
import arrowUp from './assets/up-arrow--white.png';
import { useState } from 'react';
import AddToDo from './add_todo'




export default function ToDoHeader( {title}){
    let [ isActive, setActive] = useState(false);
    let [ todoText, setText] =useState('');

    const headerStyle = {
        margin: '0 auto',
        backgroundColor:'green',
        // cursor: isActive ? 'pointer' : 'not-allowed',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        height:'80px',
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

    return;
}

      return <div style={headerStyle} >
                <div className= 'row'>
                    { /* Title vom ToDo Trenner */}
                    <pawd >{title}</pawd> 
                    {/* Zweites Element, ist ein Div um die UI zu stylen */}
                
                    <div>
                        <img src={arrowDown} width={35} height={35} alt="Garbage"onClick={deleteOption}  />

                        {/* <button style={{ display: "none"}}>  */}
                            {
                                isActive?
                            <img src={arrowDown} width={35} height={35} alt="Open" onClick = {onclicked}   />:
                            <img src={arrowUp} width={35} height={35} alt="Open" onClick = {onclicked}   />
                            }
                        {/* </button> */}
                    </div>    
                </div>
                {isActive && <AddToDo todoText ={todoText} setText = {setText} />}
            </div>
 
}
ToDoHeader.propTypes = {
    title: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
}


