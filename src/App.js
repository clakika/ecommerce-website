import React, { Component } from 'react';
import './App.css';

import Home from '../src/Layout/Home/Home';
import About from '../src/Layout/About/About';
import Steps from '../src/Layout/Steps/Steps';
import Cats from '../src/Layout/Cats/Cats';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faMousePointer, faFileAlt, faHome, faPaw, faSearch, faMapMarkerAlt, faFemale, faMale, faHeart, faFilter} from '@fortawesome/free-solid-svg-icons';


class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="Navigation__Container">
            <img className="Navigation__Logo"></img>
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
    
        <Home className="Section"/>
        <About className="Section"/>
        <Steps className="Section"/>
        <Cats className="Section"/>
      </div>
    );
  }
}

export default App;
