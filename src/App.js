import React, { Component } from 'react';
import './App.css';

import headerImage from './img/header.jpg';
import aboutImage from './img/aboutImage.jpg';

import catOne from './img/cat1.jpg';
import catTwo from './img/cat2.jpg';
import catThree from './img/cat3.jpg';
import catFour from './img/cat4.jpg';
import catFive from './img/cat5.jpg';
import catSix from './img/cat6.jpg';
import catSeven from './img/cat7.jpg';
import catEight from './img/cat8.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat, faMousePointer, faFileAlt, faHome, faPaw, faSearch, faMapMarkerAlt, faFemale, faMale, faHeart} from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* NAVIGATION START */}
        <nav>
          <div className="Navigation__Container">
            <img className="Navigation__Logo"></img>
            <h3 className="Navigation__CompanyName">Catlingly</h3>
            <ul className="Navigation__Menu">
              <FontAwesomeIcon className="Navigation__MenuItem" icon={faSearch} /> {/* search icon */}
              <FontAwesomeIcon className="Navigation__MenuItem" icon={faPaw} /> {/* cat icon */}
              <FontAwesomeIcon className="Navigation__MenuItem" icon={faHeart} /> {/* cart icon */}
              <FontAwesomeIcon className="Navigation__MenuItem" icon={faMapMarkerAlt} /> {/* location icon */}
            </ul>
          </div>
        </nav>
        {/* NAVIGATION START */}

        {/* HOME SECTION STARTS HERE */}
        <section className="Section Section__Home">
          <img className="Header__Image" src={headerImage} />
          <div className="Header__Container">
            <div className="Header">
              <h1>Adopt your future best friend</h1> {/* Include a kitty icon in the title*/}
              <h4>Discover now!</h4>
            </div>
          </div>
        </section>
        {/* HOME SECTION ENDS HERE */}

        {/* ABOUT SECTION STARTS HERE */}
        <section className="Section Section__About">
          <div className="About__Container">
            <div className="About">
              <img className='About__Image' src={aboutImage} />
              <div className='About__Text'>
                <h2>Our concept</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio. Eget magna fermentum iaculis eu non. Molestie at elementum eu facilisis sed odio morbi. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sagittis purus sit amet volutpat. Nullam vehicula ipsum a arcu. Sed faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames. Dignissim suspendisse in est ante. Id velit ut tortor pretium viverra suspendisse potenti nullam. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Donec ac odio tempor orci. Nisi porta lorem mollis aliquam ut porttitor leo a diam.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT SECTION STARTS HERE */}

        {/* ABOUT SECTION STARTS HERE */}
        <section className="Section Section__Steps">
          <div className="Steps__Container">
            <h2>How does it work?</h2>
          <div className="Steps">
            <div className="StepOne">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <FontAwesomeIcon className="Steps__Icon" icon={faCat} />
              <FontAwesomeIcon className="Steps__Icon" icon={faMousePointer} />
            </div>

            <div className="StepTwo">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <FontAwesomeIcon className="Steps__Icon" icon={faFileAlt} />
            </div>

            <div className="StepThree">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <FontAwesomeIcon className="Steps__Icon" icon={faPaw} /> 
              <FontAwesomeIcon className="Steps__Icon" icon={faHome} />
            </div>

            <div className="StepFour">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <FontAwesomeIcon className="Steps__Icon" icon={faCat} /> 
              <FontAwesomeIcon className="Steps__Icon" icon={faFemale} /> 
              <FontAwesomeIcon className="Steps__Icon" icon={faHome} />
              <FontAwesomeIcon className="Steps__Icon" icon={faCat} />
              <FontAwesomeIcon className="Steps__Icon" icon={faMale} />
            </div>
          </div>
          </div>
        </section>
        {/* ABOUT SECTION STARTS HERE */}

        {/* CATS SECTION STARTS HERE */}
        <section className="Section Section__CatList">
          <div className="CatList__Container">
            <h2>Get to know them!</h2>
            <div className="Cats">
              <div className="Cats__PhotoOne Cat__Photo">
                <img src={catOne}/>
                <div className="Cats__Name"><h4>Sam</h4></div>
              </div>

              <div className="Cats__PhotoTwo Cat__Photo">
                <img src={catTwo}/>
                <div className="Cats__Name"><h4>Sam</h4></div>
              </div>

              <div className="Cats__PhotoThree Cat__Photo">
                <img src={catThree}/>
                <div className="Cats__Name"><h4>Sam</h4></div>
              </div>

              <div className="Cats__PhotoFour Cat__Photo">
                <img src={catFour}/>
                <div className="Cats__Name"><h4>Sam</h4></div>
              </div>
              <div className="Cats__PhotoFive Cat__Photo">
                <img src={catFive}/>
                <div className="Cats__Name"><h4>Sam</h4></div>
              </div>

              <div className="Cats__PhotoSix Cat__Photo">
                <img src={catSix}/>
                <div className="Cats__Name"><h4>Sam</h4></div>
              </div>

              <div className="Cats__PhotoSeven Cat__Photo">
                <img src={catSeven}/>
                <div className="Cats__Name"><h4>Sam</h4></div>
              </div>

              <div className="Cats__PhotoEight Cat__Photo">
                <img src={catEight}/>
                <div className="Cats__Name"><h4>Sam</h4></div>
              </div>
            </div>
          </div>
        </section>
        {/* CATS SECTION STARTS HERE */}
      </div>
    );
  }
}

export default App;
""