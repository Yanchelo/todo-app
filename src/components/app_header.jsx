import { PropTypes } from 'prop-types';
import magnifyingIcon from '../assets/search-icone-2.png'
import addIcon from '../assets/plus-icon.png'
import '../App.css';
import { useState } from 'react';
import CreateGroup from './create_group';



export default function AppHeader(){
        // State's
    const [isEditing, setIsEditing] = useState(false);
        //Style's
    let myStyle = {
        height:  '70px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    };

    const headerStyle = {       
        backgroundColor:'#5B7E51',
        fontSize: '28px',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        height: isEditing ? '170px' : '70px',
        width:'402px'
    };


    const searchOption = ()=>{};

    const openTab = () => {
        console.log('change state= ' + isEditing)
        setIsEditing(!isEditing);
    }

    return (
        <div style={headerStyle} >
            <div className= 'row' style={myStyle} >
            { /* Title vom ToDo Trenner */}
                <div className='irish-grover-regular'  style={{display: 'flex', alignItems:'center'}}>
                    {'To-Do'}
                </div> 
                {/* Zweites Element, ist ein Div um die UI zu stylen */}
                <div style={{display: 'flex', alignItems:'center'}}>
                    <img src={magnifyingIcon} className='iconStyle' alt="Search" onClick={searchOption}  />                      
                    <img src={addIcon} className='iconStyle' alt="Arrow" onClick={openTab} />
                </div>
            </div>
            { isEditing && <CreateGroup />  }
        </div>
    )
}
