import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Navbar from "./NavigationBar/Navbar";
import Footer from "./Footer/Footer";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function MainPage() {
    const [showWelcome, setShowWelcome] = useState(true);
    const { t } = useTranslation();



    useEffect(() => {
        const hideTimeout = setTimeout(() => {
            setShowWelcome(false);
        }, 3000);

        return () => clearTimeout(hideTimeout);
    }, []);

    const slideShowComponent = (
        <div className={`welcome-container ${showWelcome ? "show" : "hide"}`}>
            {/*<img*/}
            {/*    className="welcome-image"*/}
            {/*    src={DenisaLogo}*/}
            {/*    alt="Denisa Logo"*/}
            {/*/>*/}
            <h1 className="welcome-heading">{t("mainPage.welcome")}</h1>
        </div>);



    return (
        <div className={"mainPage-divClass"}>
            {slideShowComponent}
            <Navbar />
            <div className="w3-container">
              <center>
                  <h1 className="main-page-title">{t("mainPage.myPortfolio")}</h1>
              </center>
            </div>
            <div className="mainPage-content-container">
                <center>
                    <p>
                    <h4 className={"welcome-paragraph"}>
                        {t("mainPage.welcome")}
                        </h4>
                    <h4 className={"welcome-sentence"}>{t("mainPage.portfolioInvitation")}</h4>
                    </p>
                    <p className="showcase-description-main-page-portfolio">


                        {t("mainPage.portfolioTextBefore")}<Link to="/aboutMe" style={{textDecoration:"none"}}>{t("navbar.about")}</Link>
                        {t("mainPage.portfolioAfterAboutMeBtn")}<Link to="/projects" style={{textDecoration:"none"}}>{t("navbar.projects")}</Link>
                        {t("mainPage.portfolioAfterProjectsBtn")}<Link to="/contact" style={{textDecoration:"none"}}>{t("navbar.contact")}</Link>
                        {t("mainPage.portfolioAfterContactBtn")}
                        {t("mainPage.portfolioAfterText")}

                    </p>
                </center>

                {/*<div className="w3-container">*/}
                {/*    <img*/}
                {/*        className="denisa-bitmoji"*/}
                {/*        src={Denisa_normalHi_bitmoji}*/}
                {/*        alt="DenisaHiBitmoji"*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
            <div className="mainPage-footer">
            <Footer />
            </div>
        </div>
    );
}

export default MainPage;
