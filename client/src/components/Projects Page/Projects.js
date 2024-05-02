import React from "react";
import "./Projects.css";
import Navbar from "../Main Page/NavigationBar/Navbar";
// import Corso from "../../images/CorsoWebsite-Portfolio.png";
import Corso from "../../images/CORSO-MAINPAGE.png";
import PetClinic from "../../images/PetClinic-Portfolio.png";
import Footer from "../Main Page/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import {useTranslation} from "react-i18next";


function ProjectCard({ title, description, imageUrl, linkGithub, link, isCorso }) {

    const { t } = useTranslation();


    return (
        <div className="project-card">
            <div className="project-image-container">
                <img src={imageUrl} alt={title} className="project-image" />
            </div>
            <div className="project-details">
                <h2>{title}</h2>
                <p>{description}</p>
                <center>
                <ul className={"project-links"}>
                    {isCorso && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="corso-project-link">
                            {t("projects.viewProjectBtn")}
                        </a>
                    )}
                    <center>
                    <a href={linkGithub} target="_blank" rel="noopener noreferrer" className="githubLinkProjects">
                        <FontAwesomeIcon icon={faGithub} style={{marginTop:"20px"}} />
                    </a>
                    </center>
                </ul>
                </center>
            </div>

        </div>
    );
}


function Projects() {

    const { t } = useTranslation();

    return (
        <div className="projects">
            <Navbar/>
            <center> <h1 className={"project-title"}>Projects</h1></center>
            <div className="project-list">
                <ProjectCard
                    title={t("projects.corsoTitle")}
                    description={t("projects.corsoDescription")}
                    imageUrl={Corso}
                    link="https://corsoelectriqueinc.ca/"
                    linkGithub="https://github.com/DylanBrass/Corso-Website"
                    isCorso={true}
                />
                <ProjectCard
                    title={t("projects.petClinicTitle")}
                    description={t("projects.petClinicDescription")}
                    imageUrl={PetClinic}
                    link="https://github.com/cgerard321/champlain_petclinic"
                    linkGithub="https://github.com/cgerard321/champlain_petclinic"
                    isCorso={false}
                />


            </div>
            <Footer />
        </div>
    );
}

export default Projects;
