import home1 from '../img/home1.png';
import styled from 'styled-components';
//Styles
import { StyleAbout, StyleDescription, StyleImage, StyleHide } from '../styles';

const AboutSection = () => {
    return (
        <StyleAbout>
            <StyleDescription>
                <div className="title">
                    <StyleHide>
                        <h2>We work to make</h2>
                    </StyleHide>
                    <StyleHide>
                        <h2>your <span>dreams</span></h2>
                    </StyleHide>
                    <StyleHide>
                        <h2>come true.</h2>
                    </StyleHide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </StyleDescription>
            <StyleImage>
                <img src={home1} alt="guy with a camera" />
            </StyleImage>
        </StyleAbout>
    );
};

export default AboutSection;