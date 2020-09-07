import React, { Component } from 'react';
import './Navigation.css';

import { Link } from 'react-scroll';
import { BrowserRouter as Router } from 'react-router-dom';

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

                    <div className="MobileNav" onClick={() => {
                        const MobileNav = document.querySelector('.MobileNav');
                        const NavMenuList = document.querySelector('.Navigation__MenuList');
                        const NavLink = document.querySelectorAll(".Navigation__MenuList li");

                        MobileNav.classList.toggle("open");

                        NavMenuList.classList.toggle("open");
                        NavLink.forEach(link => {
                            link.classList.toggle("fade");
                        })
                    }}>
                        <div className="Line"></div>
                        <div className="Line"></div>
                        <div className="Line"></div>
                    </div>
                    <Router>
                        <ul className="Navigation__MenuList">
                            <Link exact to='/'
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={300}>
                                <li>
                                    <a href="#" className="Navigation__Link">home</a>
                                </li>
                            </Link>

                            <Link to='/about'
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={300}>
                                <li>
                                    <a href="#" className="Navigation__Link">about</a>
                                </li>
                            </Link>

                            <Link to='/cats'
                                activeClass="active"
                                to="cats"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={300}>
                                <li>
                                    <a href="#" className="Navigation__Link">cats</a>
                                </li>
                            </Link>

                            <Link to='/contacts'
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={300}>
                                <li>
                                    <a href="#" className="Navigation__Link">contacts</a>
                                </li>
                            </Link>
                        </ul>
                    </Router>
                    <ul className="Navigation__MenuIcons">
                        <div className="SearchContainer">
                            <div className="SearchBar">
                                <input type="text" className="SearchInput"></input>
                                <FontAwesomeIcon className="Navigation__MenuItem SearchIcon" icon={faSearch} />
                            </div>
                        </div>
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
