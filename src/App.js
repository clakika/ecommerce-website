import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';

import Navigation from '../src/components/Navigation/Navigation';
import Home from '../src/Layout/Home/Home';
import About from '../src/Layout/About/About';
import Steps from '../src/Layout/Steps/Steps';
import Cats from '../src/Layout/Cats/Cats';
import Reviews from '../src/Layout/Reviews/Reviews';
import Footer from '../src/Layout/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navigation/>
        <Home className="Section"/>
        <About className="Section"/>
        <Steps className="Section"/>
        <Cats className="Section"/>
        <Reviews className="Section"/>
        <Footer className="Section"/>
        </Router>
      </div>
    );
  }
}

export default App;
