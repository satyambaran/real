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
import Athlete from './comps/pages/Athlete';
import Coach from './comps/pages/Coach';
import Academy from './comps/pages/Academy';
import Services from './comps/pages/Services';
ReactDOM.render(
  <div className="page"style={{overflowX:'hidden'}}>
    <div className="wrapper">
      <Router>
        <Navbar/>
        <div id="home"> <Home/> </div>
        <div id="real"><Real/></div>
        <div  id="how"> <How/> </div>
        <div  id="contact"> <Contact/> </div>
        <div id="services"><Services/></div>
        {/* <div id="athlete"><Athlete/></div>
        <div id="coach"><Coach/></div>
        <div id="academy"><Academy/></div> */}
        <div id="pro"><Pro/></div>
      </Router>
    </div>
    <Footer/>
  </div>,
  document.getElementById('root')
);