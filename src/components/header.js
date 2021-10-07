import { HashLink } from 'react-router-hash-link';
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { useTranslation } from "react-i18next";
/*componentes*/
import { MenuMovil } from "../components/menuMovil";
/* img */
import logo from '../assets/img/LOGO.jpg'

export const Header = () => {
    const { t, i18n } = useTranslation("global");
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="container-fluid p-3 header">
            <MenuMovil />
            <div className="row g-0 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-2 text-center" data-aos="zoom-in" delay="3000">
                    <HashLink smooth to="/home">
                        <img src={logo} className="img-fluid" alt="logo"></img>
                    </HashLink>
                </div>
                <div className="col-6 text-center d-none d-lg-block">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <HashLink className="nav-link active" aria-current="page" to="/about-us">{t('menu.text1')}</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/faqs">FAQS</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/services">{t('menu.text2')}</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/store">{t('menu.text3')}</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/contact">{t('menu.text4')}</HashLink>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-lg-2 text-center">
                    <HashLink className="pe-3" onClick={() => i18n.changeLanguage("en")}>
                        ENG
                    </HashLink>|
                    <HashLink className="ps-3" onClick={() => i18n.changeLanguage("es")}>
                        ESP
                    </HashLink>
                </div>
                <div className="col-12 col-lg-2 text-center">
                    <div className="d-flex">
                        <div className="flex-fill">
                            <HashLink>
                                <i className="fab fa-facebook"></i>
                            </HashLink>
                        </div>
                        <div className="flex-fill">
                            <HashLink>
                                <i className="fab fa-twitter-square"></i>
                            </HashLink>
                        </div>
                        <div className="flex-fill">
                            <HashLink>
                                <i className="fab fa-instagram-square"></i>
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
