
import React from "react";
import "./Footer.css";
import {useTranslation} from "react-i18next";

function Footer() {

    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="footer-links">
                <a href="/" className="footer-link">{t("navbar.home")}</a>
                <a href="/aboutMe" className="footer-link">{t("navbar.about")}</a>
                <a href="/projects" className="footer-link">{t("navbar.projects")}</a>
                <a href="/contact" className="footer-link">{t("navbar.contact")}</a>
            </div>
            <p className="footer-text">{t("footer.footerRights")}</p>
        </div>
    );
}

export default Footer;
