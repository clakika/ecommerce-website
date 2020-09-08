import React, { Component } from 'react';
import './Cats.css';

import Filter from '../../components/Filter/Filter';

import { BrowserRouter as Router } from 'react-router-dom';

import catOne from '../../img/cat1.jpg';
import catTwo from '../../img/cat2.jpg';
import catThree from '../../img/cat3.jpg';
import catFour from '../../img/cat4.jpg';
import catFive from '../../img/cat5.jpg';
import catSix from '../../img/cat6.jpg';
import catSeven from '../../img/cat7.jpg';
import catEight from '../../img/cat8.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faPaw, faSmileBeam, faFilter, faBaseballBall, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


export class Cats extends Component {
    /*constructor(props) {
    super(props);
    this.state = {
        clicks: 0,
        CatOne: false,
        CatTwo: false,
        CatThree: false,
        CatFour: false,
        CatFive: false,
        CatSix: false,
        CatSeven: false,
        catEight: false
        };
    }

    IncrementLikes = () => {
        const LikeButton = document.querySelector(".NumberOfLikes");
        this.setState({ clicks: this.setState.clicks + 1})
    }*/


    render() {
        return (
            <Router>
                <section className="Section Section__CatList" id="cats">
                    <div className="CatList__Container">
                        <h2>Get to know them!</h2>
                        <Filter />
                        <div className="Cats">

                            <div className="CatCard__Container">
                                <div className="CatCard CatCard--1">
                                    <div className="CatCard__Front">

                                        <img className="CatPhoto" src={catOne} />
                                    </div>
                                    <div className="CatCard__Back">
                                        <FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw} />
                                        <h4>Sam</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                        <p className="PersonalityDescription">PLAYFULNESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} /></p>
                                        <p className="PersonalityDescription">NEED FOR ATTENTION
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} /> </p>
                                        <p className="PersonalityDescription">INDEPENDENCE
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} /> </p>
                                        <p className="PersonalityDescription">FRIENDLINESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} /> </p>
                                    </div>
                                </div>
                                <div className="IconsContainer">
                                    <FontAwesomeIcon className="FlipIcon FlipIcon--1" icon={faArrowAltCircleLeft} onClick={() => {
                                        const CatCard = document.querySelector(".CatCard--1");
                                        const FlipIcon = document.querySelector(".FlipIcon--1");

                                        CatCard.classList.toggle("rotate");
                                        FlipIcon.classList.toggle("rotate");
                                    }} />
                                    <FontAwesomeIcon className="LikeIcon LikeIcon--1" icon={faHeart} onClick={() => {
                                        const LikeIcon = document.querySelector(".LikeIcon--1");
                                        LikeIcon.classList.toggle("clicked");
                                    }} />
                                </div>
                            </div>

                            <div className="CatCard__Container">
                                <div className="CatCard CatCard--2">
                                    <div className="CatCard__Front">
                                        <img className="CatPhoto" src={catTwo} />
                                    </div>
                                    <div className="CatCard__Back">
                                        <FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw} />
                                        <h4>Leo</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                        <p>PLAYFULNESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                        </p>
                                        <p>NEED FOR ATTENTION
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} /> </p>
                                        <p>INDEPENDENCE
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} /> </p>
                                        <p>FRIENDLINESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} /></p>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon className="FlipIcon FlipIcon--2" icon={faArrowAltCircleLeft} onClick={() => {
                                        const CatCardTwo = document.querySelector(".CatCard--2");
                                        const FlipIcon = document.querySelector(".FlipIcon--2");

                                        CatCardTwo.classList.toggle("rotate");
                                        FlipIcon.classList.toggle("rotate");
                                    }} />
                                    <FontAwesomeIcon className="LikeIcon LikeIcon--2" icon={faHeart} onClick={() => {
                                        const LikeIcon = document.querySelector(".LikeIcon--2");

                                        LikeIcon.classList.toggle("clicked");
                                    }} />
                                </div>
                            </div>

                            <div className="CatCard__Container">
                                <div className="CatCard CatCard--3">
                                    <div className="CatCard__Front">
                                        <img className="CatPhoto" src={catThree} />
                                    </div>
                                    <div className="CatCard__Back"><FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw} />
                                        <h4>Simba</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                        <p>PLAYFULNESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} /></p>
                                        <p>NEED FOR ATTENTION
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                        </p>
                                        <p>INDEPENDENCE
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} /> </p>
                                        <p>FRIENDLINESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} /> </p>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon className="FlipIcon FlipIcon--3" icon={faArrowAltCircleLeft} onClick={() => {
                                        const CatCard = document.querySelector(".CatCard--3");
                                        const FlipIcon = document.querySelector(".FlipIcon--3");

                                        CatCard.classList.toggle("rotate");
                                        FlipIcon.classList.toggle("rotate");
                                    }} />
                                    <FontAwesomeIcon className="LikeIcon LikeIcon--3" icon={faHeart} onClick={() => {
                                        const LikeIcon = document.querySelector(".LikeIcon--3");

                                        LikeIcon.classList.toggle("clicked");
                                    }} />
                                </div>
                            </div>

                            <div className="CatCard__Container">
                                <div className="CatCard CatCard--4">
                                    <div className="CatCard__Front">
                                        <img className="CatPhoto" src={catFour} />
                                    </div>
                                    <div className="CatCard__Back">
                                        <FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw} />
                                        <h4>Luna</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                        <p>PLAYFULNESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} /></p>
                                        <p>NEED FOR ATTENTION
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} /> </p>
                                        <p>INDEPENDENCE
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} />
                                        </p>
                                        <p>FRIENDLINESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} /> </p>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon className="FlipIcon FlipIcon--4" icon={faArrowAltCircleLeft} onClick={() => {
                                        const CatCard = document.querySelector(".CatCard--4");
                                        const FlipIcon = document.querySelector(".FlipIcon--4");

                                        CatCard.classList.toggle("rotate");
                                        FlipIcon.classList.toggle("rotate");
                                    }} />
                                    <FontAwesomeIcon className="LikeIcon LikeIcon--4" icon={faHeart} onClick={() => {
                                        const LikeIcon = document.querySelector(".LikeIcon--4");

                                        LikeIcon.classList.toggle("clicked");
                                    }} />
                                </div>
                            </div>

                            <div className="CatCard__Container">
                                <div className="CatCard CatCard--5">
                                    <div className="CatCard__Front">
                                        <img className="CatPhoto" src={catFive} />
                                    </div>
                                    <div className="CatCard__Back"><FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw} />
                                        <h4>Lola</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                        <p>PLAYFULNESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                        </p>
                                        <p>NEED FOR ATTENTION
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} /> </p>
                                        <p>INDEPENDENCE
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} />
                                        </p>
                                        <p>FRIENDLINESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} /> </p></div>
                                </div>
                                <div>
                                    <FontAwesomeIcon className="FlipIcon FlipIcon--5" icon={faArrowAltCircleLeft} onClick={() => {
                                        const CatCard = document.querySelector(".CatCard--5");
                                        const FlipIcon = document.querySelector(".FlipIcon--5");

                                        CatCard.classList.toggle("rotate");
                                        FlipIcon.classList.toggle("rotate");
                                    }} />
                                    <FontAwesomeIcon className="LikeIcon LikeIcon--5" icon={faHeart} onClick={() => {
                                        const LikeIcon = document.querySelector(".LikeIcon--5");

                                        LikeIcon.classList.toggle("clicked");
                                    }} />
                                </div>
                            </div>

                            <div className="CatCard__Container">
                                <div className="CatCard CatCard--6">
                                    <div className="CatCard__Front">
                                        <img className="CatPhoto" src={catSix} />
                                    </div>
                                    <div className="CatCard__Back"><FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw} />
                                        <h4>Cosmo</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                        <p>PLAYFULNESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} /></p>
                                        <p>NEED FOR ATTENTION
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} /> </p>
                                        <p>INDEPENDENCE
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} /> </p>
                                        <p>FRIENDLINESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} /> </p>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon className="FlipIcon FlipIcon--6" icon={faArrowAltCircleLeft} onClick={() => {
                                        const CatCard = document.querySelector(".CatCard--6");
                                        const FlipIcon = document.querySelector(".FlipIcon--6");

                                        CatCard.classList.toggle("rotate");
                                        FlipIcon.classList.toggle("rotate");
                                    }} />
                                    <FontAwesomeIcon className="LikeIcon LikeIcon--6" icon={faHeart} onClick={() => {
                                        const LikeIcon = document.querySelector(".LikeIcon--6");

                                        LikeIcon.classList.toggle("clicked");
                                    }} />
                                </div>
                            </div>

                            <div className="CatCard__Container">
                                <div className="CatCard CatCard--7">
                                    <div className="CatCard__Front">
                                        <img className="CatPhoto" src={catSeven} />
                                    </div>
                                    <div className="CatCard__Back">
                                        <FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw} />
                                        <h4>Charlie</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                        <p>PLAYFULNESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} /></p>
                                        <p>NEED FOR ATTENTION
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} /> </p>
                                        <p>INDEPENDENCE
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} />
                                        </p>
                                        <p>FRIENDLINESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} /> </p>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon className="FlipIcon FlipIcon--7" icon={faArrowAltCircleLeft} onClick={() => {
                                        const CatCard = document.querySelector(".CatCard--7");
                                        const FlipIcon = document.querySelector(".FlipIcon--7");

                                        CatCard.classList.toggle("rotate");
                                        FlipIcon.classList.toggle("rotate");
                                    }} />
                                    <FontAwesomeIcon className="LikeIcon LikeIcon--7" icon={faHeart} onClick={() => {
                                        const LikeIcon = document.querySelector(".LikeIcon--7");

                                        LikeIcon.classList.toggle("clicked");
                                    }} />
                                </div>
                            </div>

                            <div className="CatCard__Container">
                                <div className="CatCard CatCard--8">
                                    <div className="CatCard__Front">
                                        <img className="CatPhoto" src={catEight} />
                                    </div>
                                    <div className="CatCard__Back">
                                        <FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw} />
                                        <h4>Rosie</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                        <p>PLAYFULNESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall} /></p>
                                        <p>NEED FOR ATTENTION
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faHeart} /> </p>
                                        <p>INDEPENDENCE
                                    <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faCat} /> </p>
                                        <p>FRIENDLINESS <br />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} />
                                            <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam} /> </p>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon className="FlipIcon FlipIcon--8" icon={faArrowAltCircleLeft} onClick={() => {
                                        const CatCard = document.querySelector(".CatCard--8");
                                        const FlipIcon = document.querySelector(".FlipIcon--8");

                                        CatCard.classList.toggle("rotate");
                                        FlipIcon.classList.toggle("rotate");
                                    }} />
                                    <FontAwesomeIcon className="LikeIcon LikeIcon--8" icon={faHeart} onClick={() => {
                                        const LikeIcon = document.querySelector(".LikeIcon--8");

                                        LikeIcon.classList.toggle("clicked");
                                    }} />
                                </div>
                            </div>

                        </div>
                        <button>Show all</button>
                    </div>
                </section>
            </Router>
        )
    }
}

export default Cats;
