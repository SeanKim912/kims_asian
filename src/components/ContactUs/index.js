import "./ContactUs.css";
import Map from '../Map/Map';

import catset from '../../images/catset.png';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';
import tiktok from '../../images/tiktok.svg'

function ContactUs() {
    return (
        <div className='contact-block' style={{backgroundImage: `url(${catset})`}}>
            <div className="gradient-overlay2">
                <Map />
                <div className="right-block">
                    <h2 className="contact-header">We&apos;re here to help</h2>
                    <ul className='contact-container'>
                        <li className="contact-section">Call Us:</li>
                        <li className="contact-text">(828) 254-7235</li>
                    </ul>
                    <ul className='contact-container'>
                        <li className="contact-section">Ask a Question:</li>
                        <li className="contact-text">kims.asiannmore@gmail.com</li>
                    </ul>
                    <ul className='contact-container'>
                        <li className="contact-section">Connect With Us:</li>
                        <li className="social-media-list">
                            <img src={instagram} className='social-icon' />
                            <img src={linkedin} className='social-icon' />
                            <img src={tiktok} className='social-icon' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
