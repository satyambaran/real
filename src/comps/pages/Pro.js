// import react component
import React, { Component } from 'react';
// export default
import './Pro.css'
import Image from '../../images/ss.png'
export default class Pro extends Component {
    render(){
        return(
            <div className="pro" >
                <div className="procontainer">
                    <div className="prorow">
                        <div className="procol2">
                            <h1>Become a Pro</h1>
                        </div>
                        <div className="procol" >
                            <ul>
                                <li>Video Analysis</li>
                                <li>Smart Coaching</li>
                                <li>Match Analysis</li>
                                <li>AI Shot Tracking</li>
                            </ul>
                        </div>
                    </div>
                    <div className="prorow">
                        <img src={Image}  alt=' 'className="proimg" />
                    </div>
                    <div className="prorow">
                        <img src={Image}  alt=''className="proimg" />
                    </div>
                </div>
            </div>
        )
    }
}