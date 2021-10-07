import { HashLink } from 'react-router-hash-link';
import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/

export const CallToAction = () => {
    const { t, i18n } = useTranslation("global");
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="container-fluid py-5 bgTurque text-white text-center overflow-hidden">
            <div className="col-12 display-5"data-aos="flip-down">{t('callToAction.text1')} </div>
            <div className="col-12 py-5" data-aos="flip-down">
                <HashLink smooth className="btn btn-outline-light fs-3" to="/contact#contact-usTop">{t('buttons.contacto')}</HashLink>    
            </div>
        </div>
    );
};
