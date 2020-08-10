import React, { Component } from 'react';
import './Home.css';

import headerImage from '../../img/header.jpg';

export class Home extends Component {
    render() {
        return (    
        <section className="Section Section__Home">
            <img className="Header__Image" src={headerImage} />
            <div className="Header__Container">
                <div className="HeaderBorder">
                    <div className="Header">
                    <h1>Catlingly</h1>
                    <h2>Adopt your future best friend</h2>
                    <h4>Discover now!</h4>
                    </div>
                </div>
                
            </div>
        </section>
        )
    }
}

export default Home
