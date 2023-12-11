import React, { Component } from 'react'
import './subscribe.css'
import image from '/imgs/Pages/A_Dog.png';

class Subscribe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Email: ''
        }
    }
    onChangingEmail = event => {
        this.setState({
            Email: event.target.value
        })
    }
    submitted = event => {
        event.preventDefault()
        alert(this.state.Email)
        this.setState({
            Email: ''
        })
    }
    render() {
        const gt = '->'
        return (
            <div className='Subscribe__container'>
                <div className='subscribe__left'>
                    <img src={image} alt="dog" />
                </div>
                <div className='subscribe__right'>
                    <h4><span>Subscribe & get</span> Pawsome Updatenews</h4>
                    <form action="" method="post" onSubmit={this.submitted}>
                        <input type="email"
                            name="Email"
                            id="Email"
                            onChange={this.onChangingEmail}
                            value={this.state.Email}
                            placeholder='Mail'
                        />
                        <button type="submit">{gt}</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Subscribe