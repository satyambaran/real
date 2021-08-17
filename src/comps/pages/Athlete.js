import React, { Component } from 'react'
import athcards from './athcards';
import athcards2 from './athcards2';
import './Athlete.css'
export default class Athlete extends Component {
    render() {
        return (
            <div className="athlete">
                <div className="athletecontainer">
                    <h1 >Video With Extra Intelligence</h1>
                    <div className="athleterow">
                        {athcards.map((item,i)=>{
                            return(
                                <div class="athcard">
                                    <div class="athcardcontent">
                                        
                                        <div class="athcardfront">
                                            <div class="athcardfront2">
                                                <h1 style={{margin:'40px 10px'}}>{item.front}</h1>
                                            </div>
                                        </div>
                                        <div class="athcardback">
                                            <h4 style={{margin:' 3vh 1vw'}}>{item.back1}</h4> 
                                            <h4>{item.back2}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}    
                    </div>
                    <h1>Athletic Data</h1>
                    <div className="athleterow">
                        {athcards2.map((item,i)=>{
                            return(
                                <div class="athcard">
                                    <div class="athcardcontent">
                                        
                                        <div class="athcardfront">
                                            <div class="athcardfront2">
                                                <h1 style={{margin:'40px 10px'}}>{item.front}</h1>
                                            </div>
                                        </div>
                                        <div class="athcardback">
                                            <h4 style={{margin:' 3vh 1vw'}}>{item.back1}</h4> 
                                            <h4>{item.back2}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}    
                    </div>
                </div>
            </div>
        )
    }
}

