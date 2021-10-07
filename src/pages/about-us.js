import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/
import { CallToAction } from "../components/callToAction";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";
/* img */


export const AboutUS = () => {
    const { t, i18n } = useTranslation("global");
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="container-fluid p-0 text-center text-white overflow-hidden" id="aboutTop">
            {/* <div className="slider sliderAbout d-flex justify-content-center align-items-center">
                <div className="p-3 col-12 bgBlueTrans" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <h2 className="display-5">{t('about.slider.text1')}</h2>
                    <p>{t('about.slider.text2')}</p>
                </div>
            </div> */}
            <div className="container-fluid position-relative minH50vh bgDarkBlue">
                <div className="container">
                    <div className="col-12 pt-5 fs-1 fw-bold" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">{t('about.span.text1')}</div>
                    <div className="row g-0">
                        <div className="col-12 col-lg-6 p-2 p-lg-5">
                            <div className="col-12 bgBlueTrans rounded p-2 p-lg-5 span-about-compromises">
                                <div className="col-12 fs-1"><i className="far fa-gem"></i></div>
                                <div className="col-12 fw-bold borderB py-3 mb-3">
                                    {t('about.span.text2')}
                                </div>
                                <div className="col-12">
                                    {t('about.span.text3')}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 p-2 p-lg-5">
                            <div className="col-12 bgBlueTrans rounded p-2 p-lg-5 span-about-compromises">
                                <div className="col-12 fs-1"><i className="fas fa-user-tie"></i></div>
                                <div className="col-12 fw-bold borderB py-3 mb-3">
                                    {t('about.span.text4')}
                                </div>
                                <div className="col-12">
                                    {t('about.span.text5')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Particle params={particlesConfig} className="App-particles__container" />
            </div>
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-12 col-lg-6 services bgBlueDyrty text-center d-flex justify-content-center align-items-center">
                        <div data-aos="flip-left" data-aos-duration="2000">
                            <div className="col-12 fs-2">{t('about.span.text6')}</div>
                            <div className="col-12">{t('about.span.text7')}</div>
                            <div className="col-12">{t('about.span.text8')}</div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 services tecnologia bg-danger"></div>
                    <div className="col-12 col-lg-6 services outsourcing bg-danger"></div>
                    <div className="col-12 col-lg-6 services bgBlueDyrty text-center d-flex justify-content-center align-items-center">
                        <div data-aos="flip-left" data-aos-duration="2000">
                            <div className="col-12 fs-2">{t('about.span.text9')}</div>
                            <div className="col-12 fs-2">{t('about.span.text10')}</div>
                            <div className="col-12">{t('about.span.text11')}</div>
                        </div>
                    </div>
                </div>
            </div>
            <CallToAction />
        </div>
    );
};
