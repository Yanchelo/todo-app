import React from 'react';
import '../App.css';

// eslint-disable-next-line react/prop-types
export default function AddToDo({ text, setText}) {
    const inputStyle = {
        fontSize: '16px',
        height: '25px',
        width: '250px', // Fixed typo here: 'with' -> 'width'
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: '1px solid #ccc',
        borderRadius: '12px',
        outline: 'none',
        transition: 'border-color 0.3s',
    };

    const addStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0px',
        width: '30px',
        height: '30px',
        cursor: 'pointer', // Indicate that it's clickable
        //transition: 'background-color 0.3s',//
    };

    // const handleInputChange = (e) => {
    //     setText(e.target.value);
    // };

    // const handleAddClick = () => {
    //     if (text.trim()) {
    //         addToDo(text); // Assuming addToDo is passed to add a new to-do item
    //         setText(''); // Clear the input field after adding the todo
    //     }
    // };

    return (
        <div className="row" style >
            <input
                style={inputStyle}
                type="text"
                value={text}
                onChange={setText}
                placeholder="Gib etwas ein..."
            />
            <div
                style={addStyle}
                onClick={()=>{}}
                role="button"
                aria-label="Add to-do"
            >
                <img src="../assets/plus-icon.png" alt="+" style={{ width: '100%', height: '100%' }} />
            </div>
        </div>
    );
}