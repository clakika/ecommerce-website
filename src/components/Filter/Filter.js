import React, { Component, useState } from 'react';
import './Filter.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faSmileBeam, faFilter, faBaseballBall } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export class Filter extends Component {

    render() {
        return (
            <div className="Filter">
                <div className="FilterIcon">
                    <FontAwesomeIcon className="Steps__Icon" icon={faFilter} />
                </div>
                <div className="FilterBox">
                    <div>
                        <p><FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />PLAYFULNESS</p>
                        <div className="SlideContainer">
                            <input type="range" min="1" max="5" className="PersonalityRange" onInput="rangeValue.innerText = this.value"></input>
                            <div className="value" id="rangeValue">0</div>
                        </div>
                    </div>

                    <div>
                        <p><FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />NEED FOR ATTTENTION</p>
                        <div className="SlideContainer">
                            <input type="range" min="1" max="5" className="PersonalityRange"></input>
                            <div className="value">0</div>
                        </div>
                    </div>

                    <div>
                        <p><FontAwesomeIcon className="PersonalityIcon" icon={faCat} />INDEPENDENCE</p>
                        <div className="SlideContainer">
                            <input type="range" min="1" max="5" className="PersonalityRange"></input>
                            <div className="value">0</div>
                        </div>
                    </div>


                    <div>
                        <p><FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />FRIENDLINESS</p>
                        <div className="SlideContainer">
                            <input type="range" min="1" max="5" className="PersonalityRange" ></input>
                            <div className="value">0</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter
