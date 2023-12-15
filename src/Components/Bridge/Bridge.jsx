import React from 'react';
import './Bridge.css';
import Dog from '/imgs/Bridge_imgs/A Dog.jpg';
import bird from '/imgs/Bridge_imgs/A bird.jpg';
import cat from '/imgs/Bridge_imgs/A brown cat.jpg';
import fox from '/imgs/Bridge_imgs/A fox.jpg';
import Cat from '/imgs/Bridge_imgs/A grey cat.jpg';
import Hamster from '/imgs/Bridge_imgs/A Hamsters.jpg';
import hamster from '/imgs/Bridge_imgs/A hamster.jpg';
import parrot from '/imgs/Bridge_imgs/A Parrot.jpg';
import dog from '/imgs/Bridge_imgs/A siberian Husky.jpg';
import Parrot from '/imgs/Bridge_imgs/A parrot2.jpg';
import Chameleon from '/imgs/Bridge_imgs/A Chameleon.jpg';
import Rabbit from '/imgs/Bridge_imgs/A rabbit.jpg';
import Fish from '/imgs/Bridge_imgs/A Gold Fish.jpg';
import Colar from '/imgs/Designs/Colar.png';

function Bridge() {
  return (
    <div className='Bridge__Container'>
      <div className='colar__design'>
        <img src={Colar} alt="Picture of a Cat" />
      </div>
      <div className="category">
        Different
        <div className='Number'>
          45+
        </div>
        category
      </div>
      <div className="pictures">
        <div className="a_cat">
          <img src={cat} alt="Picture of a Cat" loading='lazy' />
        </div>
        <div className="a_parrot">
          <img src={parrot} alt="Picture of a parrot" loading='lazy' />
        </div>
        <div className="a_Dog">
          Dog (Jasper)
          <img src={Dog} alt="Picture of my Dog Jasper" loading='lazy' />
        </div>
        <div className="a_bird">
          <img src={bird} alt="Picture of a bird" loading='lazy' />
        </div>
        <div className="a_cat onec">
          <img src={Cat} alt="Picture of a Cat" loading='lazy' />
        </div>
        <div className="a_fox">
          <img src={fox} alt="Picture of a fox" loading='lazy' />
        </div>
        <div className="a_dogs">
          <img src={dog} alt="Picture of a dog" loading='lazy' />
        </div>
        <div className="a_cat twoc">
          <img src={Chameleon} alt="Picture of a Chameleon" loading='lazy' />
        </div>
        <div className="a_parrot onep">
          <img src={Parrot} alt="Picture of a parrot" loading='lazy' />
        </div>
        <div className="a_hamster">
          <img src={hamster} alt="Picture of a hamster" loading='lazy' />
        </div>
        <div className="a_hamster oneh">
          <img src={Hamster} alt="Picture of a hamster" loading='lazy' />
        </div>
        <div className="a_bird oneb">
          <img src={Fish} alt="Picture of a Gold Fish" loading='lazy' />
        </div>
        <div className="a_rabbit">
          <img src={Rabbit} alt="Picture of a rabbit" loading='lazy' />
        </div>
      </div>
    </div>
  )
}

export default Bridge