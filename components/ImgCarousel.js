// dependencies
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from 'next/image';

const ImgCarousel = ({pics}) => {
    return(
        <Carousel
            infiniteLoop
            autoPlay
            interval={6000}
            showIndicators
        >
            {
                pics.map((pic, index) => (
                    <div className="ImgCarousel-img" key={index}>
                        <Image
                            src={pic.pic}
                            alt={pic.alt}
                            width={'1000px'}
                            height={'450px'}
                        />
                    </div>
                ))
            }
        </Carousel>
    );
}

export default ImgCarousel;