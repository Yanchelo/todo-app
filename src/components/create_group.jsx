
import '../App.css';
import arrowUp from '../assets/up-arrow-white.png';
import { useState } from 'react';
import AddToDo from '../components/add_todo'


export default function CreateGroup( ){
    let [ isActive, setActive] = useState(false);
    let [ todoText, setText] =useState('');
    
let myStyle = {
    fontSize: '24',
    height:'100px',
    padding:'10px 0px 5px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor:'#28AA00',
};
    const headerStyle = {
        backgroundColor:'#28AA00',
        padding: '00px 20px 0px 20px',
        display: 'flex',
        flexDirection: 'column',
        height:'100px',
        width:'362px',
        fontSize: '24px',
    };

    const titleStyle={
    //    margin: '40 40 40 auto'
       
    //    margin: margin,
       height: 'fit-content'
    }

  const  onclicked =()=>{
    setActive(!isActive)
    setText('');
    return;
   }

return <div style={headerStyle} >
        <div className= 'row'style={myStyle} >
            { /* Title vom ToDo Trenner */}
            <div style = {titleStyle} >
                Create a Group
            </div> 
            {/* Zweites Element, ist ein Div um die UI zu stylen */}
                <img src={arrowUp} width={30} height={30} style={{ margin: '0px 0px 0px 0px' }}  alt="Open" onClick = {onclicked}   />                      
        </div>
      <AddToDo todoText ={todoText} setText = {setText} />
    </div>
 
}

