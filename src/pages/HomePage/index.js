import React from 'react'
import { SearchCard } from '../../components/SearchCard'
import "./style.css"
export const HomePage = () => {
    return (
        <div className='position-relative vw-100 vh-100' >
            {/* video background */}
            <video className='video-bg' autoPlay muted loop id="myVideo">
                <source src="https://res.cloudinary.com/tanvo/video/upload/v1670710997/Forest_jhlgzd.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <SearchCard />
        </div>
    )
}
