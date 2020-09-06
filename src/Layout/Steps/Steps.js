import React, { Component } from 'react';
import './Steps.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat, faMousePointer, faFileAlt, faHome, faPaw, faSearch, faMapMarkerAlt, faFemale, faMale, faHeart, faFilter} from '@fortawesome/free-solid-svg-icons'

export class Steps extends Component {
    render() {
        return (
            <section className="Section Section__Steps">
                <div className="Steps__Container">
                    <h2>How does it work?</h2>
                <div className="Steps">
                    <div className="StepOne">
                    <FontAwesomeIcon className="Steps__Icon" icon={faCat} />
                    <FontAwesomeIcon className="Steps__Icon" icon={faMousePointer} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="StepTwo">
                    <FontAwesomeIcon className="Steps__Icon" icon={faFileAlt} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="StepThree">
                    <FontAwesomeIcon className="Steps__Icon" icon={faPaw} /> 
                    <FontAwesomeIcon className="Steps__Icon" icon={faHome} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="StepFour">
                    <FontAwesomeIcon className="Steps__Icon" icon={faCat} /> 
                    <FontAwesomeIcon className="Steps__Icon" icon={faFemale} /> 
                    <FontAwesomeIcon className="Steps__Icon" icon={faHome} />
                    <FontAwesomeIcon className="Steps__Icon" icon={faCat} />
                    <FontAwesomeIcon className="Steps__Icon" icon={faMale} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                </div>
            </section>  
        )
    }
}

export default Steps
