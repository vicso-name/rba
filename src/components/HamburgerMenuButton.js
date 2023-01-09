import React, { useState } from 'react';

export function HamburgerMenuButton({ onClick }) {

  const[isToggled, setIsToggled] = useState(false);
  const handleClick = () => setIsToggled(!isToggled);

  const handleClicks = () => {
    onClick();
    handleClick();
  }

  return (

    <div onClick={handleClicks} className={isToggled ? "hamburger active" : "hamburger"}>
      <div className="burger"></div>
    </div> 
     
  );

}