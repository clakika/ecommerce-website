import React, { Component } from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

export class Footer extends Component {
    render() {
        return (
            <section className="Section__Footer">
                <div className="Footer__Container">
                    <div className="Footer__Company">
                        <h3>Catlingly</h3>
                        <div className="Socials">
                            <FontAwesomeIcon icon={faInstagram} className="icon"/>
                            <FontAwesomeIcon icon={faFacebook} className="icon"/>
                            <FontAwesomeIcon icon={faYoutube} className="icon"/>
                            <FontAwesomeIcon icon={faTwitter} className="icon"/>
                        </div>
                    </div>

                    <div className="Footer__Support Category">
                        <h5>Support</h5>
                        <div className="SupportList__Container">
                            <ul className="SupportList List">
                                <li>Contact us</li>
                                <li>FAQ</li>
                                <li>Shelter locator</li>
                            </ul>
                        </div>
                    </div>

                    <div className="Footer__AboutCompany Category">
                        <h5>Catlingly</h5>
                        <div className="AboutList__Container">
                            <ul className="AboutList List">
                                <li>About Catlingly</li>
                                <li>Catlingly design</li>
                                <li>Careers</li>
                                <li>Volunteering</li>
                            </ul>
                        </div>
                    </div>

                    <div className="Footer__Newsletter">
                        <div className="Newsletter__Container">
                            <p><FontAwesomeIcon icon={faEnvelope} className="iconNews"/>Get weekly newsletters from our shelter</p>
                            <input type="email" placeholder="Enter your e-mail address"></input>
                            <button>Sign up</button>
                        </div>
                    </div>
                </div>

                <div className="Copyright">&copy; Catlingly 2020. All rights reserved.</div>
            </section>
        )
    }
}

export default Footer
