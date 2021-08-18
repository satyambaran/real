// import react
import React, { Component } from 'react';
// export default  
import './Real.css'
import Image from '../../images/pexels-patrick-case-3601184.jpg'
import Image2 from '../../images/pexels-eric-anada-3660204.jpg'
import Image3 from '../../images/pexels-vladislav-vasnetsov-2202685.jpg'
export default class Real extends Component {
    render() {
        return (
            <div className="real">
                <div className="realcontainer">
                    <h1>Play Real</h1>
                    <div className="realcontent">
                        <div className="realpackage">
                            <h4 >Real Nets</h4>
                            <img src={Image} alt="Real Nets" />
                        </div>
                        <div className="realpackage">
                            <h4 >Real Courts</h4>
                            <img src={Image2} alt="Real Courts" />
                        </div>
                        <div className="realpackage">
                            <h4 >Real Futsal</h4>
                            <img src={Image3} alt="Real Futsal" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}