import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/
import { CallToAction } from "../components/callToAction";
/* img */


export const Store = () => {
    const { t, i18n } = useTranslation("global");
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="container-fluid p-0" id="storeTop">
            <div className="slider sliderStore d-flex justify-content-center align-items-center">
                <div className="p-3 col-12 text-center bgBlueTrans" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <h2 className="display-5">{t('tienda.slider.text1')}</h2>
                    <HashLink className="btn btn-outline-light" to="/">{t('buttons.inicio')}</HashLink>
                </div>
            </div>
        </div>
    );
};
