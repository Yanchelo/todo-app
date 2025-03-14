import '../App.css'
import { useState } from 'react';

export default function AddToDo( {text, setText} ){
    const inputStyle={
            fontSize: '16px',
            height: '25px',
            with:'250px',
            backgroundColor:'rgba(255, 255, 255, 0.7)',
            /* Hellgraue Border */
            border: '1px solid #ccc', 
            /* Runde Ecken mit Radius 12px */
            borderRadius: '12px',
            /* Entfernt den Standard-Fokus-Rahmen */
            outline: 'none',
            /* Sanfte Übergänge für die Borderfarbe */
            transition: 'border-color 0.3s',
          };
        const addStyle={
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'top',
            margin:'0px',
            /* Breite des Buttons */
            width: '40px',
            /* Höhe des Buttons */
            // height: '40px', 
            /* Weißer Hintergrund */
            color: '#fff',
            // border-radius: 12px; /* Abgerundete Ecken */
            fontSize: '30px', /* Größe des Plus-Zeichens */
            /* Zeigt an, dass es ein klickbares Element ist */
            cursor: 'pointer', 
            /* Sanfte Übergänge */
            transition: 'background-color 0.3s, transform 0.2s',
        };
  
const x = (text)=>{
    setText(text);
}

return <div className='row'>          
        <input style={inputStyle} type="text" value={text} placeholder="Gib etwas ein..."/>
        {/* Zweites Element, ist ein Div um die UI zu stylen */}
            <p style={addStyle} >+ </p>
            
    </div>
}
