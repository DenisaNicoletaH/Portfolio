import React from "react";
import "./Projects.css";
import Navbar from "../Main Page/NavigationBar/Navbar";
import Corso from "../../images/CorsoWebsite-Portfolio.png";
import PetClinic from "../../images/PetClinic-Portfolio.png";
import Footer from "../Main Page/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";


function ProjectCard({ title, description, imageUrl, linkGithub, link, isCorso }) {
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
                            View Project
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
    return (
        <div className="projects">
            <Navbar/>
            <center> <h1 className={"project-title"}>Projects</h1></center>
            <div className="project-list">
                <ProjectCard
                    title="Corso Electric Inc."
                    description="A website for an electrician company based in Montreal. The goal is
                     to have a website where they can showcase their work and attract clients.
                    This project was completed by 4 students from Champlain College St-Lambert.
                    The project includes Orders, FAQs, Reviews, Gallery Images, Services and Reports.
                    The website is done using ReactJS for Frontend, Java Springboot for Backend, and MySQL for the Database."
                    imageUrl={Corso}
                    link="https://corsoelectriqueinc.tech/"
                    linkGithub="https://github.com/DylanBrass/Corso-Website"
                    isCorso={true}
                />
                <ProjectCard
                    title="Pet Clinic"
                    description=" This is a professional school project that allowed students at Champlain College St-Lambert to collaborate and
                    to familiarize themselves with everyday work as a Scrum Master, Product Owner, as well as Developer.
                    Each team had a microservice to improve then merge with the other teams.Me and my team were in charge of VETS and was done using
                    AngularJS for Frontend, Java Springboot for Backend, as well as MongoDB for Database."
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
