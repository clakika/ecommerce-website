import React, { Component } from 'react';
import './Home.css';

import { BrowserRouter as Router } from 'react-router-dom';

import headerImage from '../../img/header.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

export class Home extends Component {
    render() {
        return (
            <Router>
                <section className="Section Section__Home" id="home">
                    <div className="Header__Container">
                        <div className="HeaderBorder">
                            <div className="Header">
                                <h1>Catlingly</h1>
                                <h2>Adopt your future best friend <FontAwesomeIcon icon={faPaw} /></h2>
                            </div>
                        </div>

                    </div>
                </section>
            </Router>
        )
    }
}

export default Home
