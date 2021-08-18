import React, { Component } from 'react'
import './Coach.css'
import Image from '../../images/subscription.png'

export default class Coach extends Component {
    render() {
        return (
            <div className="coach">
                <div className="coachcontainer">
                    <h1>In-Field</h1>
                    <div className="coachrow"style={{marginLeft:'20vw'}}>
                        <div className="coachpackage">
                            <img style={{width:'8vw',height:'8vw',}} alt='' src={Image}/>
                            <h2>Student data and videos default access</h2>
                        </div>
                        <div className="coachpackage">
                            <img style={{width:'8vw',height:'8vw'}} alt='' src={Image}/>
                            <h2>Data comparison</h2>
                        </div>
                        <div className="coachpackage">
                            <img style={{width:'8vw',height:'8vw'}} alt='' src={Image}/>
                            <h2>Video and posture play back with mark up</h2>
                        </div>
                    </div>
                    <hr className="coachline"/>
                    <div className="coachrow"style={{marginLeft:'8vw'}}>
                        <div className="coachpackage2">
                            <img style={{width:'8vw',height:'8vw'}} alt='' src={Image}/>
                            <h2>Real net live streaming</h2>
                        </div>
                        <div className="coachpackage2">
                            <img style={{width:'8vw',height:'8vw'}} alt='' src={Image}/>
                            <h2>Video evaluation with audio feedback</h2>
                        </div>
                        <div className="coachpackage2">
                            <img style={{width:'8vw',height:'8vw'}} alt='' src={Image}/>
                            <h2>Two way interactive remote sessions</h2>
                        </div>
                    </div>
                    <h1 style={{marginTop:'1vw'}}>Remote</h1>
                </div>
            </div>
        )
    }
}

