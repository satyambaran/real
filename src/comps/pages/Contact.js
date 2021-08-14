// import react
import React, { Component } from 'react';
import './Contact.css'
// import Video from '../vid.mp4'

export default class Home extends Component {
    render(){
        return (
            <div className='plain' >
            <div className='container'>
                <div className="details">
                    <div className="content">
                        <h4>What's in it?</h4>
                        <ul className="clist">
                            <li>Shot Placement</li> 
                            <li>Field length</li>
                            <li>Body Posture</li> 
                            <li>Positioning</li>
                            <li>Spin type</li> 
                            <li>Ball Speed</li> 
                        </ul>
                    </div>
                    <div>
                        <iframe
                            className="video"
                            src='https://www.youtube.com/embed/IUN664s7N-c'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}