import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import DenisaLogo from '../../../images/denisaLogoYellow-removebg-preview.png';
// import DenisaLogo from '../../../images/DenisaLogo.png';
import DenisaLogo from '../../../images/logo3-DenisaPortfolio.png';


function Navbar() {



    const goToAboutMe = () => {
        window.location.href = "/aboutMe";
    }


    return (
         <div className="navbar">
            <div className="logo">
                <img className={"DH-logo"}
                    src={DenisaLogo}
                    alt="DenisaHLogo"
                />
            </div>
            <nav>

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutMe" onClick={goToAboutMe}>About me</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;
