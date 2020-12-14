//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

//Array of Card Info
const cards = [
    { icon: clock, h1Text: 'Efficient', pText: 'So efficient!' },
    { icon: teamwork, h1Text: 'Teamwork', pText: 'Great Teamwork' },
    { icon: diaphragm, h1Text: 'Pro Gear', pText: 'Incredible Tools' },
    { icon: money, h1Text: 'Money', pText: 'Money > No Money' } 
]

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    {cards.map(card => {
                        return(
                            <div className="card">
                                <div className="icon">
                                    <img src={card.icon} alt="icon" />
                                    <h3>{card.h1Text}</h3>
                                </div>
                                <p>{card.pText}</p>
                            </div>
                    )})}
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="video camera"/>
            </div>
        </div>
    );
};

export default ServicesSection;