// dependencies
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from 'next/image';

const renderCarouselItems = (pics) => {
    return pics.map((pic) => (
        <div className="ImgSlider-img" key={pic.pos}>
            <img
                src={pic.pic}
                alt={pic.alt}
            />
        </div>
    ))
}

const ImgCarousel = (props) => {
    return(
        <Carousel
            infiniteLoop
            autoPlay
            interval={6000}
            showIndicators={false}
        >
            {renderCarouselItems(props.pics)}
        </Carousel>
    );
}

export default ImgCarousel;