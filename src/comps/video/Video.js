import React, { Component } from 'react';
import '../../App.css';
import Button from '../button/Button';
import './Video.css';
import Animation from './video.mp4'

export default class Video extends Component{
  render(){
    return (
        <div className='vidcontainer'>
          <video src={Animation} autoPlay loop muted style={{marginLeft:'0',marginRight:'0'}} />
          <ul className='outer'>
            <ul className='inner' style={{'listStyleType':'none'}}>
              <li>
                <h1 className='your'>YOUR</h1>
                <h1 className='play'>
                  <div className='rotator'>
                    Play <br/>
                    Data <br/>
                    Video
                  </div>
                </h1>
              </li>
            </ul>
            <div style={{marginLeft:'700px'}}>
              <h1 style={{marginLeft:'-80px'}}>What's in it for you?</h1>
              <div className='vidbtns'>
                <Button
                  className='btns'
                  buttonStyle='btn-primary'
                  buttonSize='btn-medium'
                >
                  Let's Find out
                </Button>
              </div>
            </div>
          </ul>
        </div>
    );
  }
}