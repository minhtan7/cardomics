import React from 'react'
import { SearchCard } from '../SearchCard'
import "./style.css"

const Hero = () => {
    return (
        <div className='position-relative vw-100 vh-100' >
            <video className='video-bg' autoPlay muted loop id="myVideo">
                {/* <source src="https://pixiefreak-theme.pxsquad.com/hero-video.mp4" type="video/mp4" /> */}
                <source src="https://res.cloudinary.com/tanvo/video/upload/v1670710997/Forest_jhlgzd.mp4" type="video/mp4" />

                Your browser does not support the video tag.
            </video>
            <SearchCard />
            {/* <div class="arrow-placeholder">
                <span>
                    <i className='arrow-down'></i>
                    <i className='arrow-down'></i>
                    <i className='arrow-down'></i>
                </span>
            </div> */}
        </div>
    )
}
export default Hero
