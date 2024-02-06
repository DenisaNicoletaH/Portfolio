import React from "react";
import "./Projects.css";
import Navbar from "../Main Page/NavigationBar/Navbar";
import Corso from "../../images/CorsoWebsite-Portfolio.png";
import PetClinic from "../../images/PetClinic-Portfolio.png";
import Footer from "../Main Page/Footer/Footer";

function ProjectCard({ title, description, imageUrl, link }) {
    return (
        <div className="project-card">
            <div className="project-image-container">
                <img src={imageUrl} alt={title} className="project-image" />
            </div>
            <div className="project-details">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <div className="projects">
            <Navbar />
           <center> <h1 className={"project-title"}>Projects</h1></center>
            <div className="project-list">
                <ProjectCard
                    title="Corso Electric Inc."
                    description="A website for an electrician company based in Montreal that has the goal to have a website where they can show their work and get more clients .
                     It was done by 4 Champlain College St-Lamber students.
                     This project includes Orders,FAQs, Reviews, Gallery Images,Services.
                    The website is done using React for Frontend,Java Springboot for Backend and MySQL for Database.
                    "
                    imageUrl={Corso}
                    link="https://github.com/DylanBrass/Corso-Website"
                />
                <ProjectCard
                    title="Pet Clinic"
                    description="A website is a professional school project that allows students at Champlain
                    College St-Lambert to familiarze themselves with everyday work as a Scrum Master, Product Owner and Developer.
                    Each team had a microservice to improve then merge with the other teams.
                    Me and my team were in charge of VETS and was done using AngularJS for Frontend,Java Springboot for Backend as well as MongoDB for Database."
                    imageUrl={PetClinic}
                    link="https://github.com/cgerard321/champlain_petclinic"
                />

            </div>
            <Footer />
        </div>
    );
}

export default Projects;
