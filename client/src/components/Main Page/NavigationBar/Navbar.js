import React, {useCallback, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import DenisaLogo from '../../../images/denisaLogoYellow-removebg-preview.png';
// import DenisaLogo from '../../../images/DenisaLogo.png';
import DenisaLogo from '../../../images/logo3-DenisaPortfolio.png';
// import {t} from "i18next";
import {useTranslation} from "react-i18next";
import languageList from "./languageListNavbar.tsx";



function Navbar() {
    const [language, setLanguage] = useState("en");
    // const { t } = useTranslation();
    const { t, i18n } = useTranslation();


    const handleLanguageChange = (lng) => {
        setLanguage(lng);
        i18n.changeLanguage(lng);
    };

    const handleLanguageToggle = () => {
        const newLanguage = language === "en" ? "fr" : "en"; 
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };


    const changeLanguage = useCallback((lng) => {
        setLanguage(lng);
    }, []);

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
                        <Link to="/">{t("navbar.home")}</Link>
                    </li>
                    <li>
                        <Link to="/aboutMe">{t("navbar.about")}</Link>
                    </li>
                    <li>
                        <Link to="/projects">{t("navbar.projects")}</Link>
                    </li>
                    <li>
                        <Link to="/contact">{t("navbar.contact")}</Link>
                    </li>
                </ul>
                <div className={"localization-btn"}>
                    <button className="language-select" onClick={() => handleLanguageToggle()}>
                        {languageList.map(lang => (
                            lang.code === language &&
                            <React.Fragment key={lang.code}>
                                <img src={lang.flag} alt={lang.name} style={{width: '20px', marginRight: '5px'}}/>
                                {lang.name}
                            </React.Fragment>
                        ))}
                    </button>


                </div>
            </nav>
        </div>
    );
}

export default Navbar;