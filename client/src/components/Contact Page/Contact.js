import React, {useState} from "react";
import Navbar from "../Main Page/NavigationBar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import Footer from "../Main Page/Footer/Footer";
import swal from 'sweetalert';
import { useTranslation } from "react-i18next";
import {t} from "i18next";





function Contact() {
    // const { t } = useTranslation();
    const [message, setMessage] = useState(" ");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Sending email:', message);
        try {
            const response = await fetch(`${process.env.REACT_APP_BE_URL}email/message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });
            if (response.ok) {
                swal("Email sent successfully!", "I will get back to you as soon as possible!", "success");
                console.log('Email sent successfully');
                setMessage('');
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };



    return (
        <div className="contact"
        style={{
            width: "100%",
        }}
        >
            <Navbar />
            <center>
                <div className="ContagePagetitle">
                    <h1 className={"contact-title"}>{t("contact.contactMe")}</h1>
                </div>
                <div className={"email-container"}>
                    <form className={"contact-form"} onSubmit={handleSubmit}>
                        <label htmlFor="messages">
                            {/*Send me a message!*/}
                            {/*{t('sendAMessage')}*/}
                        </label>
                        <center>
                            <textarea
                                id="messages"
                                name="name-message"
                                required
                                className="message-div-class"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </center>
                        <center>
                            <input type="submit" value="Send" className="send-email-btn" />
                        </center>
                    </form>

                </div>
                <div className="w3-container">
                    <div className="contact-links">
                        <ul>
                            <a href="https://github.com/DenisaNicoletaH" target="_blank" className={"github-ahref-className"}>
                                <FontAwesomeIcon icon={faGithub} className="animated-icon github-contact-icon"/>
                                <p>GitHub</p>
                            </a>
                        </ul>
                        <ul>
                            <a href="https://www.instagram.com/_denisa__nicoleta_/" target="_blank" className={"instagram-ahref-className"}>
                                <FontAwesomeIcon icon={faInstagram} className="animated-icon insta-contact-icon"/>
                                <p>Instagram</p>
                            </a>
                        </ul>
                        <ul>
                            <a href="https://www.linkedin.com/in/denisa-hategan-1b8a68214/" target="_blank" className={"linkedIn-ahref-className"}>
                                <FontAwesomeIcon icon={faLinkedin} className="animated-icon linkedIn-contact-icon" />
                                <p>LinkedIn</p>
                            </a>
                        </ul>
                        {/*<ul>*/}
                        {/*    <a href="mailto:denisanhategan@gmail.com">*/}
                        {/*        <img className="gmail-contact-icon" src={Email} alt="Email" />*/}
                        {/*        <p>denisanhategan@gmail.com</p>*/}
                        {/*    </a>*/}
                        {/*</ul>*/}
                    </div>
                </div>
            </center>
            <div className="contact-footer">
            <Footer/>
            </div>
        </div>
    );
}

export default Contact;
