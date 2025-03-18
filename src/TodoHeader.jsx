
import PropTypes from 'prop-types';
import './App.css';
import deleteButton from './assets/delete-png-white.png';
import arrowUp from './assets/up-arrow-white.png';
import arrowDown from './assets/white-down-arrow.png'
import { useState } from 'react';
import AddToDo from './components/add_todo'


export default function ToDoHeader( {title, fontSize, height, width, margin,}){
    let [ isActive, setActive] = useState(false);
    let [ todoText, setText] =useState('');
    
let myStyle = {
    fontSize: fontSize,
    height:height,
    width: width,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
};
    const headerStyle = {
        margin: '0 auto',
        // backgroundColor:'#6AC04F',
        // cursor: isActive ? 'pointer' : 'not-allowed',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        height:'80px',
        width:'402px'
    };

    const titleStyle={
    //    margin: '40 40 40 auto'
       margin: margin,
       height: 'fit-content'
    }

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
                <div className= 'row'style={myStyle} >
                    { /* Title vom ToDo Trenner */}
                    <div style = {titleStyle} >
                        {title}
                    </div> 
                    {/* Zweites Element, ist ein Div um die UI zu stylen */}
                
                    <div>
                        <img src={deleteButton} width={36} height={36} style={{ margin: '7px 20px 7px 10px' }} alt="Garbage"onClick={deleteOption}  />

                        {/* <button style={{ display: "none"}}>  */}
                            {
                                isActive?
                            <img src={arrowDown} width={36} height={36} style={{ margin: '7px 20px 7px 10px' }}  alt="Open" onClick = {onclicked}   />:
                            <img src={arrowUp} width={36} height={36} style={{ margin: '7px 20px 7px 10px' }}  alt="Open" onClick = {onclicked}   />
                            }
                        {/* </button> */}
                    </div>    
                </div>
                {isActive && <AddToDo todoText ={todoText} setText = {setText} />}
            </div>
 
}
ToDoHeader.propTypes = {
    title: PropTypes.string.isRequired,
    height: PropTypes.string,
    width: PropTypes.string,
    fontSize: PropTypes.string,
    margin: PropTypes.string,
}

