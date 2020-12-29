import home1 from '../img/home1.png';
//Styles
import { StyleAbout, StyleDescription, StyleImage, StyleHide } from '../styles';
//Framer Motion
import { motion } from 'framer-motion';

const AboutSection = () => {

    return (
        <StyleAbout>
            <StyleDescription>
                <motion.div>
                    <StyleHide>
                        <motion.h2>
                            We work to make
                        </motion.h2>
                    </StyleHide>
                    <StyleHide>
                        <motion.h2>
                            your <span>dreams</span>
                        </motion.h2>
                    </StyleHide>
                    <StyleHide>
                        <motion.h2>
                            come true.
                        </motion.h2>
                    </StyleHide>
                </motion.div>
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