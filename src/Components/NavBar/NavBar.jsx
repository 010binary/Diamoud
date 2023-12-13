import React, { useState } from 'react';
import './navstyle.scss'; // Assuming your Sass file is named navstyle.scss
import logo from '/imgs/hero&nav/Veterinary.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = ['Home', 'Boxer', 'Breedings', 'Puppies', 'About Us'];
  const NavRender = NavItems.map((navItem) => (
    <li key={navItem}>
      <a href={`#${navItem}`} onClick={() => setIsOpen(false)}>
        {navItem}
      </a>
    </li>
  ));

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className='header'>
        <a href='#'>
          <img src={logo} alt='Company Logo' />
        </a>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>{NavRender}</ul>
      <button>
        <a href='#'>Join Us</a>
      </button>
      <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
        <div className='line' />
        <div className='line' />
        <div className='line' />
      </div>
    </nav>
  );
}

export default NavBar;
