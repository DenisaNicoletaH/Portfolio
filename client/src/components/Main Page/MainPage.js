import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Navbar from "./NavigationBar/Navbar";
import Footer from "./Footer/Footer";
// import Denisa_normalHi_bitmoji from "../../images/Denisa_normalHi_bitmoji-removebg-preview.png"

function MainPage() {
    const [showWelcome, setShowWelcome] = useState(true);

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
            <h1 className="welcome-heading">Welcome to My Portfolio!</h1>
        </div>);



    return (
        <div className={"mainPage-divClass"}>
            {slideShowComponent}
            <Navbar />
            <div className="w3-container">
              <center>
                  <h1 className="main-page-title">My Portfolio</h1>
              </center>
            </div>
            <div className="mainPage-content-container">
                <center>
                    <p>
                    <h4 className={"welcome-paragraph"}>
                    Welcome!
                        </h4>
                    <h4 className={"welcome-sentence"}>
                    My name is Denisa Hategan, and I invite you to explore my professional portfolio.
                    </h4>
                    </p>
                    <p className="showcase-description-main-page-portfolio">


                    Here, you will find comprehensive insights into my background,
                    achievements, and skill set. To learn more about me and my expertise,
                    please navigate to the "About Me" section.
                    For a detailed overview of my current and past projects,
                    feel free to explore the "Projects" tab. Each project showcases my dedication,
                    creativity, and problem-solving abilities. Should you wish to get in touch for collaboration opportunities
                    or inquiries, the "Contact" section provides all necessary information.

                    Thank you for visiting. I hope you find my portfolio informative and engaging.

                    Warm regards,
                    Denisa Hategan
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
