import React from 'react';
import '../styles/LogoImage.css';

const LogoImage = () => {
  const handleClick = () => {
    window.open('https://www.itfacil.com.br', '_blank');
  };

  return (
    <div className="floating-image-container" onClick={handleClick}>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwuxO7OPoCkMXokRJqMuY8qratnf_66n0-iw&s" 
        alt="Floating Icon" 
        className="floating-image" 
      />
    </div>
  );
};

export default LogoImage;
