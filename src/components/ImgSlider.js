// dependencies
import React from "react";

// styles
import '../styles/ImgSlider.css';

function ImgSlider(props) {
    let img_pics = props.pics;
    let img_selector = props.imageSelector;

    return(
        <div>
            <div>
                <img
                    src={img_pics[img_selector].pic}
                    alt={img_pics[img_selector].alt}
                />
            </div>
            <div className="slider-bullets">
                {
                    props.pics.map((pic) =>
                        (
                            <div key={pic.pos} id="outer-circle" onClick={() => props.handleImageSelector(pic.pos)}>  
                            {
                                img_selector === pic.pos &&
                                <div id="inner-circle">
                                </div>
                            }
                            </div>
                        )
                    )
                }
                
            </div>
        </div>
    );
}

export default ImgSlider;