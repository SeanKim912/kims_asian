import { NavLink } from "react-router-dom";
import "./Navigation.css";
import "../../fonts/font.css";

import logo from '../../images/kims_logo.png';

function Navigation() {
    return (
        <ul className="nav-container">
        <li className="logo-container">
            <NavLink to="/">
            <img src={logo} style={{height: "5vh"}}/>
            </NavLink>
        </li>
        <ul className='tab-container'>
            <li className='tab'>
            <NavLink to='about' className='link'>
                ABOUT US
            </NavLink>
            </li>
            <li className='tab'>
            <NavLink to='products' className='link'>
                PRODUCTS
            </NavLink>
            </li>
            <li className='tab'>
            <NavLink to="contact" className='link'>
                CONTACT US
            </NavLink>
            </li>
        </ul>
        </ul>
    );
}

export default Navigation;
