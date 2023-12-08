import React from 'react'
import './Pagetwo.css'
import spiral from '/imgs/Designs/Design2.png';
import claw from '/imgs/Designs/Design1.png';
import scissors from '/imgs/Icon/scissors-solid.svg';
import shirt from '/imgs/Icon/shirt-solid.svg';
import stethoscope from '/imgs/Icon/stethoscope-solid.svg';

function Pagetwo() {
    return (
        <div className='Pagetwo__container'>
            <div className='Design__one'>
                <img src={spiral} alt="Design one" />
            </div>
            <div className='Design__two'>
                <img src={claw} alt="Design two" />
            </div>
            <div className='Content__container'>
                <p className='Our__services'>our Service</p>
                <div className='services'>
                    <div className='pharmacy section active'>
                        <div className="pagetwo_imgs ">
                            <img src={stethoscope} alt="Stethoscope Icon" className='Stethoscope' />
                        </div>
                        <p>
                            <span>
                                Pharmacy
                            </span>
                            Apoquel is an oral tablet that works differently than
                            other allergy medication, it goes straight to the source to help relieve itch and inflammations at its
                            core-addressing the underlying cause of irritation
                        </p>
                        <button>
                            <a>
                                explore
                            </a>
                        </button>
                    </div>
                    <div className='haircut section'>
                        <div className="pagetwo_imgs">
                            <img src={scissors} alt="Scissors Icon" className='scissors' />
                        </div>
                        <p>
                            <span>
                                breed-specific Haircut
                            </span>
                            Regular grooming is essential to your pet's health as it helps prevent
                            skin issues such as malting
                        </p>
                        <button>
                            <a>
                                explore
                            </a>
                        </button>
                    </div>
                    <div className='cloths section'>
                        <div className="pagetwo_imgs">
                            <img src={shirt} alt="Shirt Icon" className='Shirt' />
                        </div>
                        <p>
                            <span>
                                cloths
                            </span>
                            Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quos provident magnam dolor! Sapiente error saepe commodi totam aperiam
                            architecto sit esse reiciendis fuga! Sunt, animi!
                        </p>
                        <button>
                            <a>
                                explore
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagetwo