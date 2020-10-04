import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../src/components/Navigation/Navigation';
import Home from '../src/Layout/Home/Home';
import About from '../src/Layout/About/About';
import Steps from '../src/Layout/Steps/Steps';
import Cats from '../src/Layout/Cats/Cats';
import Reviews from '../src/Layout/Reviews/Reviews';
import Footer from '../src/Layout/Footer/Footer';

function App() {

  let [likes, setLikes] = useState(0);
  const [cat, setCat] = useState([
    {
      id: 1,
      liked: false
    },

    {
      id: 2,
      liked: false
    },

    {
      id: 3,
      liked: false
    },

    {
      id: 4,
      liked: false
    },

    {
      id: 5,
      liked: false
    },

    {
      id: 6,
      liked: false
    },

    {
      id: 7,
      liked: false
    },

    {
      id: 8,
      liked: false
    }
  ]);

  const Incrementor = (id) => {
    let updateLiked = [...cat];

    console.log(setLikes);
    
    if(updateLiked[id].liked == false) {
      updateLiked[id].liked = true;
      setCat(updateLiked);
      setLikes((prev) => prev + 1); 
    } else {
      updateLiked[id].liked = false;
      setCat(updateLiked);
      setLikes ((prev) => prev - 1);
    }
  };

  return (
    <div>
      <Router>

        <Navigation likesCounter={likes}/>
        <Home className="Section" />
        <About className="Section" />
        <Steps className="Section" />

        <Cats className="Section" incrementHandler={Incrementor}/>
        <Reviews className="Section" />
        <Footer className="Section" />
      </Router>
    </div>
  );
}

export default App;
