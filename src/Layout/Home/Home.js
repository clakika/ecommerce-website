import React, { Component } from 'react';
import './Home.css';

import headerImage from '../../img/header.jpg';

export class Home extends Component {
    render() {
        return (    
        <section className="Section Section__Home">
            <img className="Header__Image" src={headerImage} />
            <div className="Header__Container">
                <div className="Header">
                <h1>Adopt your future best friend</h1> {/* Include a kitty icon in the title*/}
                <h4>Discover now!</h4>
                </div>
            </div>
        </section>
        )
    }
}

export default Home
