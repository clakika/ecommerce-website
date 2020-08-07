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
import { faCat, faMousePointer, faFileAlt, faHome, faPaw, faSearch, faMapMarkerAlt, faFemale, faMale, faHeart, faFilter} from '@fortawesome/free-solid-svg-icons';

export class Cats extends Component {
    render() {
        return (
            <section className="Section Section__CatList">
                <div className="CatList__Container">
                    <h2>Get to know them!</h2>
                    <p><FontAwesomeIcon className="Steps__Icon" icon={faFilter} />Filter</p>
                    <div className="Cats">
                        <div className="Cats__PhotoOne Cat__Photo">
                            <img src={catOne} />
                            <a href="#"><FontAwesomeIcon className="LikeBtn" icon={faHeart} /></a>
                            <div className="Cats__Name"><h4>Sam</h4></div>
                        </div>

                        <div className="Cats__PhotoTwo Cat__Photo">
                            <img src={catTwo} />
                            <a href="#"><FontAwesomeIcon className="LikeBtn" icon={faHeart} /></a>
                            <div className="Cats__Name"><h4>Sam</h4></div>
                        </div>

                        <div className="Cats__PhotoThree Cat__Photo">
                            <img src={catThree} />
                            <a href="#"><FontAwesomeIcon className="LikeBtn" icon={faHeart} /></a>
                            <div className="Cats__Name"><h4>Sam</h4></div>
                        </div>

                        <div className="Cats__PhotoFour Cat__Photo">
                            <img src={catFour} />
                            <a href="#"><FontAwesomeIcon className="LikeBtn" icon={faHeart} /></a>
                            <div className="Cats__Name"><h4>Sam</h4></div>
                        </div>
                        <div className="Cats__PhotoFive Cat__Photo">
                            <img src={catFive} />
                            <a href="#"><FontAwesomeIcon className="LikeBtn" icon={faHeart} /></a>
                            <div className="Cats__Name"><h4>Sam</h4></div>
                        </div>

                        <div className="Cats__PhotoSix Cat__Photo">
                            <img src={catSix} />
                            <a href="#"><FontAwesomeIcon className="LikeBtn" icon={faHeart} /></a>
                            <div className="Cats__Name"><h4>Sam</h4></div>
                        </div>

                        <div className="Cats__PhotoSeven Cat__Photo">
                            <img src={catSeven} />
                            <a href="#"><FontAwesomeIcon className="LikeBtn" icon={faHeart} /></a>
                            <div className="Cats__Name"><h4>Sam</h4></div>
                        </div>

                        <div className="Cats__PhotoEight Cat__Photo">
                            <img src={catEight} />
                            <a href="#" className="LikeBtn"><FontAwesomeIcon icon={faHeart} /></a>
                            <div className="Cats__Name"><h4>Sam</h4></div>
                        </div>
                        <button>Learn more!</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Cats
