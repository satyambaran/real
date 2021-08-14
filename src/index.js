import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './comps/footer/Footer';
import Navbar from './comps/navbar/navbar';
import Real from './comps/pages/Real';
import Contact from './comps/pages/Contact';
import Home from './comps/pages/Home';
import How from './comps/pages/How';
import Pro from './comps/pages/Pro';
ReactDOM.render(
  <div className="page"style={{overflowX:'hidden'}}>
    <div className="wrapper">
      <Router>
        <Navbar/>
        {/* <div className="appnav"></div> */}
        <div id="home"> <Home/> </div>
        <div  id="how"> <How/> </div>
        <div  id="contact"> <Contact/> </div>
        {/* <div style={{background:'white'}}>
        </div> */}
        {/* <div id="about"><About/> </div> */}
        <div id="real"><Real/></div>
        <div id="pro"><Pro/></div>
      </Router>
    </div>
    <Footer/>
  </div>,
  document.getElementById('root')
);

// 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
