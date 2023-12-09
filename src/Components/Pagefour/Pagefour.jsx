import React from 'react'
import './Pagefour.css'
import pic from '/imgs/Pages/A Woman & her Husky(3).jpg'

function Pagefour() {
  return (
    <div className='Pagefour__container'>
        <div className='Pagefour'>
            <div className='Pagefour__image'>
                <img src={pic} alt="Review 1"/>
            </div>
            <div className='Pagefour__section'>
                <h2>Customers Review</h2>
                <p>As we continue to push for better regulation
                    in the Australian pet food industry it can be hard to 
                    trust many pet food brands. our 2024 best cat food in australia list will
                    offer you a great starting point in deciding what to feed your cat.
                </p><div>
                <button>prev</button>
                <button>next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pagefour