import { HashLink } from 'react-router-hash-link';
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/
import { MenuMovil } from "../components/menuMovil";
/* img */
import logoEmpty from '../assets/img/LOGOVACIO.png'

export const Footer = () => {
    const { t, i18n } = useTranslation("global");
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="container-fluid p-3 footer bgLinearBlue text-white">
            <div className="row g-0 d-flex justify-content-center align-items-center text-center">
                <div className="col-12 col-lg-5">
                    <div className="col-12 text-center">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <HashLink className="nav-link active" aria-current="page" to="/about-us#aboutTop">{t('menu.text1')}</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/faqs#faqsTop">FAQS</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/services#serviciosTop">{t('menu.text2')}</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/store#storeTop">{t('menu.text3')}</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/contact#contact-usTop">{t('menu.text4')}</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-2" data-aos="zoom-in" delay="3000">
                    <HashLink to="/home#homeTop" smooth>
                        <img src={logoEmpty} className="logoVacio" alt="logo"></img>
                    </HashLink>
                </div>
                <div className="col-12 col-lg-5">
                    <div className="col-12 text-center">
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
                <div className="col-12">© 2021 Succor Digital.</div>

            </div>
        </div>
    );
};
