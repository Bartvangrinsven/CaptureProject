import React from 'react';
import home1 from '../img/home1.png';
// Styled
import styled from 'styled-components';
import {StyledAbout, StyledDescription, StyledHide, StyledImage} from '../styles'


const AboutSection = () => {
    return(
        // Div is replaced by styled component
        <StyledAbout className="about">
            <StyledDescription className='description'>
                <div className='title'>
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>
                            your <span>dreams</span>
                        </h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>come true.</h2>
                    </StyledHide>
                    <p>Contact us for any photografy or videografy ideas that you have. We are profesionals with amazing talent.</p>
                    <button>- Contact Us</button>
                </div>
            </StyledDescription> 
            <StyledImage>
                    <img src={home1} alt="guy with a camera" />
            </StyledImage>
        </StyledAbout>
    )
}



export default AboutSection;