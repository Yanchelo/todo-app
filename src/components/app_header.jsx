import magnifyingIcon from '../assets/search-icone-2.png'
import addIcon from '../assets/plus-icon.png'
//import AddToDo from './add_todo';//
import '../App.css';
import { useState } from 'react';
import CreateGroup from './create_group';


export default function AppHeader(){
    // State's
//const [groupname, setName] = useState('');//

const [isEditing, setIsEditing] = useState(false);
    //Style's
let myStyle = {
    fontSize: '28px',
    height:  '70px',
    width: '402px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
};
const headerStyle = {       
    backgroundColor:'#5B7E51',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    height:isEditing?'170px' : '70px',
    width:'402px'
};
const iconStyle = { 
    margin: '7px 25px 7px 0px',
    height:'30px', 
    width: '30px',
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
        <div className='irish-grover-regular' style={{marginLeft:'25px', display: 'flex', alignItems:'center', }} >
            {'To-Do'}
        </div> 
        {/* Zweites Element, ist ein Div um die UI zu stylen */}
        <div style={{display: 'flex', alignItems:'center'}}>
            <img src={magnifyingIcon}   style={iconStyle} alt="Search" onClick={searchOption}  />                      
            <img src={addIcon} style={iconStyle} alt="Arrow" onClick={openTab} />
        
        </div>    
    </div>
    { isEditing && <CreateGroup/>  }
</div>
}
