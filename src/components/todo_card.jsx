import { useState } from 'react';
import deleteButtonRed from './assets/delete-png-red.png';
import circleButton from '.assets/gray-circle-outline.png';

export default function ToDoCard ({ title }) {
 
    
    const cardStyle = {
        margin: '0 auto',
        backgroundColor:'white',
        padding: '1 px solid #C6C6C6',
        display: 'flex',
        flexDirection: 'column',
        height:'80px',
        width:'402px'
    };
    const deleteRedStyle = {
        widtt: '36px',
        height: '36px',
        cursor: 'pointer'
    }
    const circleButtonStyle = {
        width: '36px',
        height: '36px',
        cursor: 'pointer',
        margin: '7px 20px 7px 10px',
    }
    
    return  <div style = {cardStyle}>
            <div className = 'row'style={} >


            </div>
        </div>

}