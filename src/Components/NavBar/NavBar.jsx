import React from 'react'
import './navstyle.css'
import logo from '/imgs/hero&nav/Veterinary.png';

function NavBar() {
  const NavItems = ['Home', 'Boxer', 'Breedings', 'Puppies', 'About Us']
  const NavRender = NavItems.map(navitems => <li key={navitems}><a href={`#${navitems}`}>{navitems}</a></li>)
  return (
    <nav >
      <div className='header'>
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
    </nav>
  )
}

export default NavBar