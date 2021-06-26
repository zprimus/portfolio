// dependencies
import React from "react";
import Carousel from "react-bootstrap/Carousel";

// styles
import '../styles/ImgSlider.css';

function renderCarouselItems(img_pics) {
    return img_pics.map((img_pic) => (
        <Carousel.Item
            key={img_pic.pos}
        >
            <div className="ImgSlider-img">
                <img
                    className="d-block w-100"
                    src={img_pic.pic}
                    alt={img_pic.alt}
                />
            </div>
        </Carousel.Item> 
    ))
}

function ImgSlider(props) {
    let img_pics = props.pics;

    return(
        <Carousel>
            {renderCarouselItems(img_pics)}
        </Carousel>
    );
}

export default ImgSlider;