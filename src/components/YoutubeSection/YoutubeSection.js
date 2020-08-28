import React, {useEffect} from 'react';
import ReactPlayer from "react-player";
import './YoutubeSection.css';
import AOS from 'aos';

const YoutubeSection = () => {
    useEffect(() => {
        AOS.init(); 
        AOS.refresh(); 
      })


    return (
        <section className="banner-categories youtube-section">
            <div className="banner-collections">
                <div className="collection-wrapper">
                <div className="photo-wrapper">
                        <div className="photo">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                                width="100%"
                                height="100%"
                            />

                        </div>
                </div>		
                <div className="collection-content color-banner" data-aos="fade" data-aos-delay="200" >
                    <div className="collection-content-wrapper">
                    <div className="collection-content-text">
                        <h4 className="content-header">ZAUFAJ NASZEMU DOŚWIADCZENIU</h4>
                        <p className="content-paragraph team-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nihil cumque laboriosam distinctio aliquid quam architecto fugit sunt, voluptates corrupti, numquam libero consequatur unde aspernatur, voluptatem veniam similique quos laudantium.</p>
                       
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default YoutubeSection;