import React, { Component } from 'react';
import './Hero.css';
import imgs from '/imgs/hero&nav/HeroFirst.png';

class HeroPage extends Component {
    render() {
        return (
            <>
                <div className='Hero'>
                    <div className='Hero__Text'>
                        <h1>welcome to the pawsome pet grooming</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Soluta vitae nobis earum saepe nihil, commodi explicabo doloribus ullam iure vero facere, exercitationem id? Nam neque vel debitis sed quaerat dolore natus voluptatibus minima qui, beatae, expedita tempora mollitia, amet temporibus laudantium nobis earum autem fugit aperiam
                        </p>
                        <button><a href="#">Join Now</a></button>
                        <button><a href="#">Contact Us</a></button>
                    </div>
                    <div className='Hero__imgs'>
                        <img src={imgs} alt='image of 3 dogs'/>
                    </div>
                </div>
            </>
        )
    }
}

export default HeroPage