import React from 'react';
import ReactPlayer from "react-player"

const YoutubeSection = () => {

    return (
        
        <div className="container">            
            <ReactPlayer
            url="https://www.youtube.com/watch?v=ug50zmP9I7s"
          />
        </div>
    );
}

export default YoutubeSection;