import home1 from '../img/home1.png';
//Styles
import { StyleAbout, StyleDescription, StyleImage, StyleHide } from '../styles';
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';

const AboutSection = () => {

    return (
        <StyleAbout>
            <StyleDescription>
                <motion.div>
                    <StyleHide>
                        <motion.h2 variants={titleAnim}>
                            We work to make
                        </motion.h2>
                    </StyleHide>
                    <StyleHide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span>
                        </motion.h2>
                    </StyleHide>
                    <StyleHide>
                        <motion.h2 variants={titleAnim}>
                            come true.
                        </motion.h2>
                    </StyleHide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.
                    </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </StyleDescription>
            <StyleImage>
                <motion.img
                    variants={photoAnim}
                    src={home1}
                    alt="guy with a camera" />
            </StyleImage>
        </StyleAbout>
    );
};

export default AboutSection;