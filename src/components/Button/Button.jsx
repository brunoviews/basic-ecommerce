import React from 'react';
import './Button.css';


function Button({ text, onClick, type = 'primary', size = 'medium', disabled = false }) {
    return (
      <button 
        className={`button ${type} ${size}`} 
        onClick={onClick} 
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
  
  export default Button;