import React, { Component } from 'react';
import Image from '../../images/banner.png'
export default class Home extends Component {
    render(){
        return (
            <div>
                <img src={Image} alt=''style={{width:'100%'}}/>
            </div>
        )
    }
}