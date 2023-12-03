import React from 'react'
import './navstyle.css'
import logo from '../../../public/Veterinary.png';

function NavBar() {
    const NavItems = ['Home', 'Boxer', 'Breedings', 'Puppies', 'About Us']
    const NavRender = NavItems.map(navitems => <li key={navitems}><a href={`#${navitems}`}>{navitems}</a></li>)
  return (
    <nav >
        <p className='header'><img src={logo} alt="Company Logo"/></p>
        <ul>
            {NavRender}
        </ul>
    </nav>
  )
}

export default NavBar