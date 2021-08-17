// import react
import React, { Component } from 'react';
import './Contact.css'
import Image from '../../images/aspiring_athlete_small.png'
import Image1 from '../../images/amateur-player.jpg'
import Image2 from '../../images/coach.jpg'
import Image3 from '../../images/club_small.png'
// import Video from '../vid.mp4'

export default class Home extends Component {
    render(){
        return (
            <div className='contact' >
                <h1 >What's In It For?</h1>  
                <div className='contactcontainer'>
                    <div className="contactdetails">
                        <div className="contactcontent">
                            <p>Fitness, skill and performance data</p>
                            <p>Training and match videos</p> 
                            <p>Review / Analyse</p>
                        </div>
                        <div>
                            <img src={Image} style={{width:'16vw',borderRadius:'.5vw'}}/>
                        </div>
                    </div>
                    <div className="contactdetails">
                        <div>
                            <img src={Image1} style={{width:'16vw',borderRadius:'.5vw'}}/>
                        </div>
                        <div className="contactcontent">
                            <p>Arena experience</p>
                            <p>Videos with highlights</p>
                            <p>Athletic social network</p>
                        </div>
                    </div>
                    <div className="contactdetails">
                        <div className="contactcontent">
                            <p>ML assistance for training</p>
                            <p>AI enabled data capture and comparison</p>
                            <p>Squad management</p>
                        </div>
                        <div>
                            <img src={Image2} style={{width:'16vw',borderRadius:'.5vw'}}/>
                        </div>
                    </div>
                    <div className="contactdetails">
                        <div>
                            <img src={Image3} style={{width:'16vw',borderRadius:'.5vw'}}/>
                        </div>
                        <div className="contactcontent">
                            <p>Upgrade to Real Grounds at zero capex</p>
                            <p>Scheduling and payment management</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}