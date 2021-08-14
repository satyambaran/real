// import react
import React, { Component } from 'react';
import './How.css';
import Image from '../../images/download.png'

export default class How extends Component {
    render(){
        return (
            <div className="card">
                <div className="cardcontainer">
                    <h1>Automated Analysis using Machine Learning</h1>
                    <div className="cardwrapper">
                        <div className="cardpackage">
                            <img className='cardimg' alt='' src={Image} />
                            <p className='cardtext' style={{width:'320px'}}>Connect with world class smart grounds, athletes and coaches.</p>
                        </div>
                        <div className="cardpackage">
                            <img className='cardimg' alt='' src={Image} />
                            <p className='cardtext'style={{width:'320px'}}>One subscription to manage all activities for multiple sports.</p>
                        </div>
                    </div>
                    <div className="cardwrapper">
                        <div className="cardpackage">
                            <img className='cardimg' alt='' src={Image} />
                            <p className='cardtext' style={{width:'320px'}}>Track and improve personal AI by analysing, sharing and comparing fitness, skills and performance data.</p>
                        </div>
                        <div className="cardpackage">
                            <img className='cardimg' alt='' src={Image} />
                            <p className='cardtext' style={{width:'320px'}}>Access to a library of personalised videos for review and analysis.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}