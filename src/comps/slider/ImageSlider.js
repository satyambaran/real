import React,{Component} from 'react'
import { Images } from './Images'
import './ImageSlider.css'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
const length=Images.length;
export class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        }
    };
    leftClick=()=>{
        this.setState({current:(length+this.state.current-1)%length});
    };
    rightClick=()=>{
        this.setState({current:(length+this.state.current+1)%length});
    };
    render() {
        return (
            <div className='slider'>
                <FaArrowAltCircleLeft className='leftarrow' onClick={this.leftClick}/>
                <FaArrowAltCircleRight className='rightarrow' onClick={this.rightClick}/>
                {Images.map((image,i)=>{
                    return(
                        <div key={i} className='slidecontainer'>                                
                            {i===this.state.current&&(<img src={Images[(i+length-1)%length].image} alt='img' className='imagel'/>)}
                            <div className={i===this.state.current?'slide active':'slide'} key={i}> {/* Each child in a list should have a unique "key" prop */}
                                {i===this.state.current&&(<img src={Images[i].image} alt='img' className='image'/>)}
                                {i===this.state.current&& <div className='bars'>
                                    {Array.from({length:length}).map((item,i)=>{
                                        return(
                                            <div key={i} className={i===this.state.current?'bar active':'bar'} onClick={()=>{this.setState({current:i})}}/>
                                        )
                                    })}
                                </div>}
                            </div>
                            {i===this.state.current&&(<img style={{}} src={Images[(i+length+1)%length].image} alt='img' className='imager'/>)}
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ImageSlider