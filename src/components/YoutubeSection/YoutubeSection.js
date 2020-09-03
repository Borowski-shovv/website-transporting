import React, {useEffect} from 'react';
import ReactPlayer from "react-player";
import styles from './YoutubeSection.module.scss';
import AOS from 'aos';

const YoutubeSection = () => {
    useEffect(() => {
        AOS.init(); 
        AOS.refresh(); 
      })


    return (
        <section className={`${styles.bannerCategories} ${styles.youtubeSection}`}>
            <div className={styles.bannerCollections}>
                <div className={styles.collectionWrapper}>
                    <div className={styles.photoWrapper}>
                            <div className={styles.photo}>
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                                    width="100%"
                                    height="100%"
                                    data-aos="zoom-in-right" data-aos-duration="1000"
                                />

                            </div>
                    </div>		
                    <div className={`${styles.collectionContent} ${styles.colorBanner}`} data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="1000">
                        <div className={styles.collectionContentWrapper}>
                            <div className={styles.collectionContentText}>
                                <h4 className={styles.contentHeader}>ZAUFAJ NASZEMU DOŚWIADCZENIU</h4>
                                <p className={styles.contentParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nihil cumque laboriosam distinctio aliquid quam architecto fugit sunt, voluptates corrupti, numquam libero consequatur unde aspernatur, voluptatem veniam similique quos laudantium.</p>  
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur aperiam, unde dolor ea soluta nesciunt repellendus sapiente vel maiores nobis, accusantium perspiciatis placeat iste eos reiciendis architecto debitis saepe voluptatibus.</p>                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YoutubeSection;