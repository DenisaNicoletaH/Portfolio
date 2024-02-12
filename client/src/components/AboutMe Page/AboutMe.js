import React, { useState } from "react";
import Navbar from "../Main Page/NavigationBar/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutMe.css";
import DenisaIllumi from "../../images/Denisa_Illumi.jpg";
import DenisaLights from "../../images/Denisa_Light.jpg";
// import DenisaBarbie from "../../images/Denisabarbie2.jpg";
import DenisaMainPFP from "../../images/DenisaLinkedInPFP.jpg";
// import DenisaParty from "../../images/DenisaPartyPicture.jpg";
import DenisaCity from "../../images/DenisaCityCentre.jpg";
import DenisaBack from "../../images/DenisaQuebec.jpg";
import DenisaCat from "../../images/DenisaChicoCat2.jpg";
import CVImage from "../../images/CV_en_Portfolio.png";
import CVImage_fr from "../../images/CV_fr_Portfolio.png";
import Footer from "../Main Page/Footer/Footer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


function AboutMe() {
    const [currentCVIndex, setCurrentCVIndex] = useState(0);
    const [buttonLabel, setButtonLabel] = useState("Français");

    const slideShowSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const nextCV = () => {
        setCurrentCVIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        setButtonLabel((prevLabel) => (prevLabel === "Français" ? "English" : "Français"));
    };


    //DOWNLOADS THE CV as PDF
    const download = () => {
        const input = document.getElementById('CV-image-container');

        html2canvas(input, { scale: 5 }) //Scale increases the images quality
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'mm',
                    format: 'a4',
                });

                const imgWidth = 210;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;

                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                if(nextCV === "Français") {
                    pdf.save('CV_DenisaHategan_FR.pdf');
                }else{
                    pdf.save('CV_DenisaHategan_EN.pdf');
                }
            });
    };



    return (
        <div className="aboutMe-divClass">
            <Navbar/>
            <div className="w3-container">
                <center>
                    <h1 className="about-me-title">About Me</h1>
                </center>
            </div>
            <div className="content-container">
                <center>
                    <p className="showcase-description-about-me">
                        My name is Denisa Nicoleta Hategan,
                        and I am currently pursuing my studies at Champlain College St-Lambert with a focus on Computer Science and Technology.
                        Anticipated to graduate in May 2024, I am eager to embark on the next phase of my academic journey at ETS,
                        in the Software Engineering program. Driven by enthusiasm for continuing to learn and grow,
                        I am passionate about gaining new knowledge, particularly in new technologies,
                        programming languages, and frameworks. I'm dedicated to both personal and professional growth, constantly
                        working to improve my skills and knowledge. Recognized for my industrious work ethic and steadfast determination,
                        I approach challenges with a proactive mindset.
                        I thrive in environments that foster innovation and encourage collaborative problem-solving,
                        constantly seeking opportunities to broaden my horizons and contribute meaningfully to projects and initiatives.
                    </p>

                    <p className={"hobbies-description-about-me"}>
                        <h2 className="hobbies-title">Hobbies:</h2>
                        going outside, watching a huge variety of movies and TV shows , playing video games.
                        <h2 className="languages-title">Languages:</h2>
                        English, French, and Romanian.
                    </p>

                </center>
                <div className="slide-show-w3-container">
                    <Slider {...slideShowSettings}>
                        <img className="denisa-illumi" src={DenisaBack} alt="DenisaIllumi"/>
                        <img className="denisa-lights" src={DenisaCat} alt="DenisaLights"/>
                        <img className="popcorn-aboutme" src={DenisaCity} alt="Popcorn"/>
                        <img className="denisa-barbie" src={DenisaMainPFP} alt="DenisaBarbie"/>
                    </Slider>
                </div>
            </div>
            <div className="full-skills-class">
                <center>
                    <h1 className="skills-title">Skills</h1>
                </center>
                <div className="skills-container">
                    <div className="skills-content-left">
                        <center>
                            <h2 className="frontend-skills-title">Front-end</h2>
                            <ul className="frontend-skill-ul">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Bootstrap</li>
                            </ul>
                        </center>
                    </div>
                    <div className="skills-content-right">
                        <center>
                            <h2 className="backend-skills-title">Back-end</h2>
                            <ul className="backend-skill-ul">
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>Python</li>
                            </ul>
                        </center>
                    </div>
                    <div className="skills-content-other">
                        <center>
                            <h2 className="other-skills-title">Other</h2>
                            <ul className="other-skill-ul">
                                <li>Git</li>
                                <li>RESTful APIs</li>
                            </ul>
                        </center>
                    </div>
                </div>
            </div>
            <center>
                <div className="CV-container" id="CV-container">
                    <center>
                        <h2 className="CV-title">CV</h2>
                    </center>
                    <div id="CV-image-container">
                        <img className="CV-image" src={currentCVIndex === 0 ? CVImage : CVImage_fr} alt="CV"/>
                    </div>
                    <div className="CV-buttons">
                        <button className="CV-button" onClick={nextCV}>
                            {buttonLabel}
                        </button>
                    </div>
                    <center>
                        <button onClick={download} className="download-pdf-btn">
                            Download CV
                        </button>
                    </center>
                </div>
            </center>
            <Footer/>
        </div>
    );
}

export default AboutMe;
