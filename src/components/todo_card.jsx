/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import deleteButtonRed from '../assets/delete-png-red.png';
import circleButton from '../assets/gray-circle-outline.png';
import checkIcone from '../assets/circle-icone-done.png';

export default function ToDoCard ({ title, isActive }) {
    const  [isChecked, setIsChecked] = useState(isActive);
    
    const cardStyle = {
        margin: '0px auto',
        backgroundColor:'white',
        padding: '12px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height:'80px',
        borderLeft: '2px solid #C6C6C6',
        borderRight: '2px solid #C6C6C6',
        borderTop: '1px solid #C6C6C6',
        borderBottom: '1px solid #C6C6C6',
    };

    const deleteRedStyle = {
        width: '30px',
        height: '30px',
        cursor: 'pointer',
    };
    const circleButtonStyle = {
        width: '30px',
        height: '30px',
        cursor: 'pointer',
    };
    const circleClick = () => {
        console.log(title);
        setIsChecked(!isChecked);
    };
    const iconRowStyle ={ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' ,
        
    };
    const textCard ={

    };
    const contentStyle ={
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'right' ,        
    };
    
    console.log(title)
    return  (
        <div style = {cardStyle}>
            <div style={iconRowStyle} >
                <img
                    src={isChecked ? checkIcone : circleButton}
                    alt='Circle' 
                    style={circleButtonStyle}
                    onClick={circleClick}
                />
                <img src={deleteButtonRed} alt='Delete' style={deleteRedStyle} />
            </div>

            <div style={contentStyle}>
                <div style={{ fontSize: '22px', color: '#666666'}}> 
                    {title} 
                </div>            
            </div>
        </div>
    );
}