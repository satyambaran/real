// import react
import React, { Component } from 'react';
import './How.css';
import Image from '../../images/stadium.png'
import Image1 from '../../images/subscription.png'
import Image2 from '../../images/AI.png'
import Image3 from '../../images/videos.png'

export default class How extends Component {
    render(){
        return (
            <div className="card">
                <div className="cardcontainer">
                    <h1 style={{marginLeft:'10%', marginRight:'10%'}}>Automated Analysis using Machine Learning</h1>
                    <div className="cardwrapper">
                        <div className="cardpackage">
                            <img  alt='' src={Image} />
                            <p className='cardtext' style={{width:'280px'}}>Connect with world class smart grounds, athletes and coaches.</p>
                        </div>

                        <div className="cardpackage">
                            <img alt='' src={Image1} />
                            <p className='cardtext'style={{width:'280px'}}>One subscription to manage all activities for multiple sports.</p>
                        </div>
                    </div>
                    <div className="cardwrapper">
                        <div className="cardpackage">
                            <img alt='' src={Image2} />
                            <p className='cardtext' style={{width:'280px'}}>Track and improve personal AI by analysing, sharing and comparing fitness, skills and performance data.</p>
                        </div>

                        <div className="cardpackage">
                            <img alt='' src={Image3} />
                            <p className='cardtext' style={{width:'280px'}}>Access to a library of personalised videos for review and analysis.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}