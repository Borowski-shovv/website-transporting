import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './ScrollTopButton.css';

const ScrollTopButton = () => {
    const [showScroll, setShowScroll] = useState('');

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
    )
}

export default ScrollTopButton;
