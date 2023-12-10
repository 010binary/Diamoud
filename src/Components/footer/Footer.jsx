import React from 'react'
import './footer.css'
import logo from '/imgs/hero&nav/Veterinary.png';
import colar from '/imgs/Designs/Colar.png';

function Footer() {
    const lists = ['About', 'Project', 'Services', 'Portfoilo', 'Blog', 'Contact']
    const display = lists.map(list => <li><a href={`#${list}`}>{list}</a></li>)
    return (
        <div className='footer__container'>
            <div className='footer__left'>
                <a href='#'>
                    <img src={logo} alt="Company Logo" />
                </a>
            </div>
            <div className='footer__design'>
                <img src={colar} alt="Colar design" />
            </div>
            <div className='footer__right'>
                <div className='divs'>
                    {display}
                </div>

                <div className='icons'>
                    twitter
                    github
                    linkedin
                </div>
            </div>

        </div>
    )
}

export default Footer