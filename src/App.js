import React, { Component } from 'react';
import './App.css';

import headerImage from './img/header.jpg';
import aboutImage from './img/aboutImage.jpg';


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
              <li className="Navigation__MenuItem">O</li> {/* search icon */}
              <li className="Navigation__MenuItem">O</li> {/* cat icon */}
              <li className="Navigation__MenuItem">O</li> {/* cart icon */}
              <li className="Navigation__MenuItem">O</li> {/* location icon */}
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
      </div>
    );
  }
}

export default App;
