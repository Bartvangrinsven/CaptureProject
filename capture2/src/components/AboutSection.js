import React from 'react';
import home1 from '../img/home1.png';
// Styled
import styled from 'styled-components';


const AboutSection = () => {
    return(
        // Div is replaced by styled component
        <StyledAbout className="about">
            <div className='description'>
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
            </div> 
            <StyledImage>
                    <img src={home1} alt="guy with a camera" />
            </StyledImage>
        </StyledAbout>
    )
}

// Styled Components
// normal css code within js object
// Start const with capital letter
const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`

const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }    
`

const StyledHide = styled.div`
    overflow: hidden;
`

export default AboutSection;