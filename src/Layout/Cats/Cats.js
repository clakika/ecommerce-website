import React, { Component } from 'react';
import './Cats.css';

import catOne from '../../img/cat1.jpg';
import catTwo from '../../img/cat2.jpg';
import catThree from '../../img/cat3.jpg';
import catFour from '../../img/cat4.jpg';
import catFive from '../../img/cat5.jpg';
import catSix from '../../img/cat6.jpg';
import catSeven from '../../img/cat7.jpg';
import catEight from '../../img/cat8.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faPaw, faSmileBeam, faFilter, faBaseballBall, faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


export class Cats extends Component {
    render() {
        return (
            <section className="Section Section__CatList">
                <div className="CatList__Container">
                    <h2>Get to know them!</h2>
                    <p><FontAwesomeIcon className="Steps__Icon" icon={faFilter} />Filter</p>
                    <div className="Cats">

                        <div className="CatCard__Container">
                            <div className="CatCard">
                                <div className="CatCard__Front">
                                    <img className="CatPhoto" src={catOne}/>
                                </div>
                                <div className="CatCard__Back">
                                    <FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw}/>
                                    <h4>Sam</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                    <p className="PersonalityDescription">PLAYFULNESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/></p>
                                    <p className="PersonalityDescription">NEED FOR ATTENTION
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/> </p>
                                    <p className="PersonalityDescription">INDEPENDENCE
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/> </p>
                                    <p className="PersonalityDescription">FRIENDLINESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/> </p>
                                </div>
                            </div>
                            <div>
                                <FontAwesomeIcon className="FlipIcon" icon={faArrowAltCircleLeft} onClick={() => {
                                    const CatCard = document.querySelector(".CatCard");
                                    const FlipIcon = document.querySelector(".FlipIcon");

                                    CatCard.classList.toggle("rotate");
                                    FlipIcon.classList.toggle("rotate");
                                }}/>
                                <FontAwesomeIcon className="LikeIcon" icon={faHeart} onClick={() => {
                                  const LikeIcon = document.querySelector(".LikeIcon");
                                  
                                  LikeIcon.classList.toggle("clicked");
                                }}/>
                            </div>
                        </div>

                        <div className="CatCard__Container">
                            <div className="CatCard">
                                <div className="CatCard__Front">
                                    <img className="CatPhoto" src={catTwo}/>
                                </div>
                                <div className="CatCard__Back">
                                <FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw}/>
                                    <h4>Leo</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                    <p>PLAYFULNESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    </p>
                                    <p>NEED FOR ATTENTION
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/> </p>
                                    <p>INDEPENDENCE
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/> </p>
                                    <p>FRIENDLINESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/> 
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/></p>
                                </div>
                            </div>
                        </div>

                        <div className="CatCard__Container">
                            <div className="CatCard">
                                <div className="CatCard__Front">
                                    <img className="CatPhoto" src={catThree}/>
                                </div>
                                <div className="CatCard__Back"><FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw}/>
                                    <h4>Simba</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                    <p>PLAYFULNESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/></p>
                                    <p>NEED FOR ATTENTION
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                     </p>
                                    <p>INDEPENDENCE
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/> </p>
                                    <p>FRIENDLINESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/> </p>
                                </div>
                            </div>
                        </div>

                        <div className="CatCard__Container">
                            <div className="CatCard">
                                <div className="CatCard__Front">
                                    <img className="CatPhoto" src={catFour}/>
                                </div>
                                <div className="CatCard__Back">
                                <FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw}/>
                                    <h4>Luna</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                    <p>PLAYFULNESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/></p>
                                    <p>NEED FOR ATTENTION
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/> </p>
                                    <p>INDEPENDENCE
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/>
                                     </p>
                                    <p>FRIENDLINESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/> </p>
                                </div>
                            </div>
                        </div>

                        <div className="CatCard__Container">
                            <div className="CatCard">
                                <div className="CatCard__Front">
                                    <img className="CatPhoto" src={catFive}/>
                                </div>
                                <div className="CatCard__Back"><FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw}/>
                                    <h4>Lola</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                    <p>PLAYFULNESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    </p>
                                    <p>NEED FOR ATTENTION
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/> </p>
                                    <p>INDEPENDENCE
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/>
                                    </p>
                                    <p>FRIENDLINESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/> </p></div>
                            </div>
                        </div>

                        <div className="CatCard__Container">
                            <div className="CatCard">
                                <div className="CatCard__Front">
                                    <img className="CatPhoto" src={catSix}/>
                                </div>
                                <div className="CatCard__Back"><FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw}/>
                                    <h4>Cosmo</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                    <p>PLAYFULNESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/></p>
                                    <p>NEED FOR ATTENTION
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/> </p>
                                    <p>INDEPENDENCE
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/> </p>
                                    <p>FRIENDLINESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/> </p>
                                </div>
                            </div>
                        </div>

                        <div className="CatCard__Container">
                            <div className="CatCard">
                                <div className="CatCard__Front">
                                    <img className="CatPhoto" src={catSeven}/>
                                </div>
                                <div className="CatCard__Back">
                                <FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw}/>
                                    <h4>Charlie</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                    <p>PLAYFULNESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/></p>
                                    <p>NEED FOR ATTENTION
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/> </p>
                                    <p>INDEPENDENCE
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/>
                                     </p>
                                    <p>FRIENDLINESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/> </p>
                                </div>
                            </div>
                        </div>

                        <div className="CatCard__Container">
                            <div className="CatCard">
                                <div className="CatCard__Front">
                                    <img className="CatPhoto" src={catEight}/>
                                </div>
                                <div className="CatCard__Back">
                                <FontAwesomeIcon className="CatCard__BackIcon" icon={faPaw}/>
                                    <h4>Rosie</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a.</p>
                                    <p>PLAYFULNESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faBaseballBall}/></p>
                                    <p>NEED FOR ATTENTION
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faHeart}/> </p>
                                    <p>INDEPENDENCE
                                    <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faCat}/> </p>
                                    <p>FRIENDLINESS <br/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/>
                                    <FontAwesomeIcon className="PersonalityIcon" icon={faSmileBeam}/> </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <button>Show all</button>
                </div>
            </section>
        )
    }
}

export default Cats
