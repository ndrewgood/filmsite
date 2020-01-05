import React from "react"
import VideoSrc from "../videos/ShortBackgroundFootage.mp4"

const BackgroundVideo = () => (
    <div id="videoContainer">
        <video autoPlay muted loop playsInline id="video">
            <source src={ VideoSrc } type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>         
    </div>
)

export default BackgroundVideo
