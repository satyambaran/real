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
                        <div className="procol">
                            <h1>Become a Pro</h1>
                        </div>
                        <div style={{marginLeft:'30%',marginTop:'30px'}}>
                            <ul className="prolist">
                                <li>Shot Tracking</li>
                                <li>Video Analysis</li>
                                <li>Smart Coaching</li>
                                <li>Match Analysis</li>
                            </ul>
                        </div>
                    </div>
                    <div className="prorow">
                        <img src={Image} style={{width:'70%', height:'250px',marginLeft:'15%',borderRadius:'10px'}} alt=' 'className="proimg" />
                    </div>
                    <div className="prorow">
                        <img src={Image} style={{width:'70%', height:'250px',marginLeft:'15%',borderRadius:'10px'}} alt=''className="proimg" />
                    </div>
                </div>
            </div>
        )
    }
}