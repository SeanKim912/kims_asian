import "./AboutUs.css";
import "animate.css";
import teaset from '../../images/teaset.png';

function AboutUs() {
    let backgroundStyles = {
        backgroundImage: `url(${teaset})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="about-container" style={backgroundStyles}>
            <div className="gradient-overlay">
                <div className="about-left" />
                <p className="about-right">
                    <h1>
                        Welcome to&nbsp;
                        <span style={{color: '#990000'}}>KIM&apos;S</span>&nbsp;
                        <span style={{color: '#38761d'}}>ASIAN MARKET</span>
                    </h1>
                    <span className="korean-text">안녕하세요</span>&nbsp;
                    <span className="english-text">(Hello)</span>.&nbsp;
                    Here the vibrant spirit of Korean-American heritage
                    meets the rich tapestry of Asian culture. As the proud owners we are thrilled to share our passion for
                    authentic flavors, diverse traditions, and the joy of exploring the culinary and cultural treasures of Asia
                    with Asheville!&nbsp;
                    <span className="korean-text">감사합니다</span>&nbsp;
                    <span className="english-text">(Thank you)</span>&nbsp;
                    for being a part of our Kim&apos;s family!
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
