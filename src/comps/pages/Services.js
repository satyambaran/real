import React, { Component } from 'react'
import Academy from './Academy'
import Athlete from './Athlete'
import Coach from './Coach'
import './Services.css'
export default class Services extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             athlete:true,
             coach:false,
             academy:false
        }
    }
    onClick1=()=>{
        this.setState({
            athlete:true,
            coach:false,
            academy:false})
    }
    onClick2=()=>{
        this.setState({
            athlete:false,
            coach:true,
            academy:false})
    }
    onClick3=()=>{
        this.setState({
            athlete:false,
            coach:false,
            academy:true})
    }
    render() {
        console.log(this.state)
        return (
            <div className="services">
                <div className="servicescontainer">
                    <div className="servicesrow">
                        <button className={this.state.athlete?'btnsrvc btnactive':'btnsrvc'} onClick={this.onClick1}>Athlete</button>
                        <button className={this.state.coach?'btnsrvc btnactive':'btnsrvc'} onClick={this.onClick2}>Coach</button>
                        <button className={this.state.academy?'btnsrvc btnactive':'btnsrvc'} onClick={this.onClick3}>Academy</button>
                    </div>
                    <div className={this.state.athlete?'showit':'hideit'}><Athlete/></div>
                    <div className={this.state.coach?'showit':'hideit'}><Coach/></div>
                    <div className={this.state.academy?'showit':'hideit'}><Academy/></div>
                </div>                
            </div>
        )
    }
}


