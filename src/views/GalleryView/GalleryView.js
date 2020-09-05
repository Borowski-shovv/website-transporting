import React from 'react';
import OwlCarousel from '../../components/OwlCarousel/Owldemo1';
import './GalleryView.css';
import Gallery from 'react-grid-gallery';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';


// photos 
import photo1 from '../../assets/images/blog_1.jpg';
import photo2 from '../../assets/images/blog_2.jpg';
import photo3 from '../../assets/images/blog_3.jpg';
import photo4 from '../../assets/images/blog_4.jpg';
import photo5 from '../../assets/images/blog_5.jpg';

const IMAGES =
[{
        src: photo1,
        thumbnail: photo1,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
},
{
        src: photo2,
        thumbnail: photo2,
        thumbnailWidth: 420,
        thumbnailHeight: 212,

},
{
        src: photo3,
        thumbnail: photo3,
        thumbnailWidth: 420,
        thumbnailHeight: 212
},
{
    src: photo4,
    thumbnail: photo4,
    thumbnailWidth: 420,
    thumbnailHeight: 212,
},
{
    src: photo5,
    thumbnail: photo5,
    thumbnailWidth: 420,
    thumbnailHeight: 212,
},
{
    src: photo1,
    thumbnail: photo1,
    thumbnailWidth: 420,
    thumbnailHeight: 212,
},
{
    src: photo2,
    thumbnail: photo2,
    thumbnailWidth: 420,
    thumbnailHeight: 212,

},
{
    src: photo3,
    thumbnail: photo3,
    thumbnailWidth: 420,
    thumbnailHeight: 212
},
{
src: photo4,
thumbnail: photo4,
thumbnailWidth: 420,
thumbnailHeight: 212,
},
{
src: photo5,
thumbnail: photo5,
thumbnailWidth: 420,
thumbnailHeight: 212,
},
{
src: photo4,
thumbnail: photo4,
thumbnailWidth: 420,
thumbnailHeight: 212,
},
{
src: photo5,
thumbnail: photo5,
thumbnailWidth: 420,
thumbnailHeight: 212,
},
]
const FleetView = () => {
    return (
        <>
             
                <div className="gallery-wrapper">
            <Container>
                    <Gallery images={IMAGES}/>
            </Container>                              
                </div>
       
        </>
    )
}

export default FleetView;