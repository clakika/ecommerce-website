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
            <ul className="Navigation__Menu">
              <FontAwesomeIcon className="Navigation__MenuItem" icon={faSearch} /> {/* search icon */}
              <FontAwesomeIcon className="Navigation__MenuItem" icon={faPaw} /> {/* cat icon */}
              <FontAwesomeIcon className="Navigation__MenuItem" icon={faHeart} /> {/* cart icon */}
              <FontAwesomeIcon className="Navigation__MenuItem" icon={faMapMarkerAlt} /> {/* location icon */}
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
