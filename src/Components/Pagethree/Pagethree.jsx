import React from 'react'
import './Pagethree.css'
import image from '/imgs/Pages/A Woman & her Husky(2).jpg';
import Designone from '/imgs/Designs/Design.png';
import Designtwo from '/imgs/Designs/Design3.png';

function Pagethree() {
    return (
        <div className='Pagethree__container'>
            <div className='pagethree__design__one'>
                <img src={Designone} alt="Page decoration" />
            </div>
            <div className='pagethree__design__two'>
                <img src={Designtwo} alt="Page decoration"/>
            </div>

            <div className='Left__img'>
                <img src={image} alt="Picture of a woman and her dog"/>
            </div>
            <div className='Right__text'>
                <p className='Pagethree__header'>
                    Making pet parenting easy for everyone
                </p>
                <p className='Pagethree__Description'>
                    Could this the dog with the longest tail?
                    the Rampur Greyhound - shy, sensitive, alert and faithful. This is a breed that has
                    climbed its way to being top dog because of its intelligence
                </p>
                <ul>
                    <li>Adaption</li>
                    <li>Frozen Raw</li>
                    <li>Next Day Delivery</li>
                </ul>
                <button>
                    <a>
                        explore
                    </a>
                </button>

            </div>
        </div>
    )
}

export default Pagethree