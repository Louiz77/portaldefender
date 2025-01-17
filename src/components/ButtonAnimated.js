import React from 'react';
import '../styles/ButtonAnimated.css'

const ButtonAnimated = ({ text, onClick }) => {
  return (
    <button className="animated-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonAnimated;