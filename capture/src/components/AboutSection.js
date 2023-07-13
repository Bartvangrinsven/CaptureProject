import React from 'react';
import home1 from "../img/home1.png";

const AboutSection = () => {
    return(
        <div className='description'>
            <div className='title'>
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>
                        your <span>dreams</span>
                    </h2>
                </div>
                <div className="hide">
                    <h2>come true.</h2>
                </div>
                <p>Contact us for any photografy or videografy ideas that you have. We are profesionals with amazing talent.</p>
                <button>-Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="guy with a camera" />
            </div>
        </div>
    )
}

export default AboutSection;