import React, { useRef } from 'react';
import './navstyle.css';
import logo from '/imgs/hero&nav/Veterinary.png';


function NavBar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  const NavItems = ['Home', 'Boxer', 'Breedings', 'Puppies', 'About Us'];
  const NavRender = NavItems.map((navItem) => (
    <li key={navItem}>
      <a href={`#${navItem}`}>
        {navItem}
      </a>
    </li>
  ));

  return (
    <nav ref={navRef}>
      <div className='Logo'>
        <a href='#'>
          <img src={logo} alt="Company Logo" />
        </a>
      </div>
      <ul>
        {NavRender}
      </ul>
      <button>
        <a>
          join us
        </a>
      </button>
      <div className="icons">
        <div className="burger-menu" onClick={showNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="cancel-menu" onClick={showNavbar}>
          <span className="left"></span>
          <span className="right"></span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
