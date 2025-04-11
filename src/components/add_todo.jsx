import React, { useState } from 'react';
import add from '../assets/plus-icon.png';
import '../App.css';
import { useTodo } from '../todo_component'; 


// eslint-disable-next-line react/prop-types
export default function AddToDo( {categorie}) {
    const { addEntryToCategory } = useTodo();
    const[text,setState]= useState('');
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
        
        let newToDo ={"name": newTitle, "isFinished": false};
        addEntryToCategory(categorie, newToDo);
       
    };

    return (
        <div className="row"  >
            <input
                style={inputStyle}
                type="text"
                value={text}
                onChange={ (e)=> setState(e.target.value)}
                placeholder="Gib etwas ein..."
            />
            <div
                // style={addStyle}
                onClick={handleAddClick}
                role="button"
                aria-label="Add to-do"
            >
                <img src={add} alt="+" className='iconStyle' />
            </div>
        </div>
    );
}