import React from 'react'
import './navstyle.css'

function NavBar() {
    const NavItems = ['Home', 'Boxer', 'Breedings', 'Puppies', 'About Us']
    const NavRender = NavItems.map(navitems => <li key={navitems}><a href={`#${navitems}`}>{navitems}</a></li>)
  return (
    <nav >
        <h1 className='header'>LOGO</h1>
        <ul>
            {NavRender}
        </ul>
    </nav>
  )
}

export default NavBar