import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleBurger = () => {
    setActive(!active);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            <img src="./LOGOOOOO.png" alt="" className="logo" />

            <div className={`header_menu ${active ? 'active' : ''}`}>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contacts</a>
            </div>

            <div onClick={toggleBurger} className={`burger ${active ? 'active' : ''}`}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
