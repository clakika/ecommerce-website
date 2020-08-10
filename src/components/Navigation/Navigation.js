import React, { Component } from 'react';
import './Navigation.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faSearch, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

export class Navigation extends Component {
    render() {

        window.addEventListener('scroll', (event) => {
            let nav = document.querySelector("nav");
            let windowPosition = window.scrollY > 0;
    
            nav.classList.toggle("scrolling-active", windowPosition);
          });
    
        return (
            <nav>
                <div className="Navigation__Container">
                    <h3 className="Navigation__CompanyName">Catlingly</h3>
                    <ul className="Navigation__MenuList">
                        <li>
                            <a href="#" className="Navigation__Link">home</a>
                        </li>
                        <li>
                            <a href="#" className="Navigation__Link">about</a>
                        </li>
                        <li>
                            <a href="#" className="Navigation__Link">cats</a>
                        </li>
                        <li>
                            <a href="#" className="Navigation__Link">contacts</a>
                        </li>
                    </ul>
                    <ul className="Navigation__MenuIcons">
                        <li>
                            <a href="#"><FontAwesomeIcon className="Navigation__MenuItem" icon={faSearch} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon className="Navigation__MenuItem" icon={faPaw} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon className="Navigation__MenuItem" icon={faHeart} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon className="Navigation__MenuItem" icon={faMapMarkerAlt} /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation
