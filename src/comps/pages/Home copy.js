// import react
import React, { Component } from 'react';
import '../../App.css'
import Cards from '../card/Cards';
import Video from '../video/Video';
import PlainPage from '../plain/Plainpage';
import { Images } from '../slider/Images';
import ImageSlider from '../slider/ImageSlider';
// import Video from '../vid.mp4'

export default class Home extends Component {
    render(){
        return (
            <div className='homeclass' style={{overflowX:'hidden'}}>
                <Video/>
                <Cards/>
                <PlainPage/>
                <ImageSlider slides={Images}/>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
                <h1>Something is better than nothing</h1>
            </div>
        )
    }
}