import { Helmet } from "react-helmet";
import { send } from 'emailjs-com';
import React, { useState } from 'react';
import "../../node_modules/aos/dist/aos.css";
import { useTranslation } from "react-i18next";
/*componentes*/
import { CallToAction } from '../components/callToAction'
/* img */

export const Faqs = () => {
    const { t, i18n } = useTranslation("global");

    return (
        <div className="container-fluid p-0" id="faqsTop">
            <div className="text-white py-5 sliderFaqs d-flex justify-content-center align-items-center">
                <div className="col-12">
                    <div className="row g-0">
                        <div className="col-12 col-lg-6 offset-lg-6 text-start">
                            <div className="col-12 p-3" data-aos="zoom-out-up">
                                <h2 className="">{t('faqs.slider.text1')}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="col-12 text-center py-5" data-aos="zoom-in">
                    {t('faqs.span.text1')}
                </div>
                <div className="col-12 py-5">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item" data-aos="flip-up">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button text-center col-12" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    {t('faqs.faq1.title')}
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        {t('faqs.faq1.text1')}
                                    </p>
                                    <p>
                                        {t('faqs.faq1.text2')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" data-aos="flip-up">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    {t('faqs.faq2.title')}
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        {t('faqs.faq2.text1')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" data-aos="flip-up">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    {t('faqs.faq3.title')}
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        {t('faqs.faq3.text1')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" data-aos="flip-up">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    {t('faqs.faq4.title')}
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        {t('faqs.faq4.text1')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" data-aos="flip-up">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    {t('faqs.faq5.title')}
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        {t('faqs.faq5.text1')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" data-aos="flip-up">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    {t('faqs.faq6.title')}
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        {t('faqs.faq6.text1')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" data-aos="flip-up">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    {t('faqs.faq7.title')}
                                </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        {t('faqs.faq7.text1')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item" data-aos="flip-up">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    {t('faqs.faq8.title')}
                                </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        {t('faqs.faq8.text1')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CallToAction />
        </div>
    );
};
