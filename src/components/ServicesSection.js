//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//Styles
import { StyleAbout, StyleDescription, StyleImage } from '../styles';
import styled from 'styled-components';

//Array of Card Info
const cards = [
    { icon: clock, h1Text: 'Efficient', pText: 'So efficient!' },
    { icon: teamwork, h1Text: 'Teamwork', pText: 'Great Teamwork' },
    { icon: diaphragm, h1Text: 'Pro Gear', pText: 'Incredible Tools' },
    { icon: money, h1Text: 'Money', pText: 'Money > No Money' } 
]

const ServicesSection = () => {
    return (
        <Services>
            <StyleDescription>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    {cards.map(card => {
                        return(
                            <Card>
                                <div className="icon">
                                    <img src={card.icon} alt="icon" />
                                    <h3>{card.h1Text}</h3>
                                </div>
                                <p>{card.pText}</p>
                            </Card>
                    )})}
                </Cards>
            </StyleDescription>
            <StyleImage>
                <img src={home2} alt="video camera"/>
            </StyleImage>
        </Services>
    );
};

const Services = styled(StyleAbout)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;