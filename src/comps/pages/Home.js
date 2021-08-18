import React, { Component } from 'react';
import './Home.css'
import Image from '../../images/banner.png'
import Image2 from '../../images/phone.png'
export default class Home extends Component {
    render(){
        return (
            <div className="home">
                <img className="homebanner"src={Image} alt=''/>
                {/* <img className="homephone" src={Image2} alt=''/> */}
            </div>
        )
    }
}