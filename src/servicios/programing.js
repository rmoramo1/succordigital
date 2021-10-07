import React from 'react';
import { useTranslation } from "react-i18next";
export const Programing = () => {
    const { t, i18n } = useTranslation("global");
    return (
        <div className="container-fluid p-0 text-center textBlue">
            <div className="container-fluid py-5 bg-white">
                <div className="container" data-aos="fade-up">
                    <div className="col-12 pb-4 fs-2">{t('servicios.servicios.disenoWeb.text1')}</div>
                    <div className="col-12 pb-4 text-start">{t('servicios.servicios.disenoWeb.text2')}</div>
                    <div className="col-12 pb-4 fs-2" >{t('servicios.servicios.disenoWeb.text9')}</div>
                    <div className="col-12 text-start">{t('servicios.servicios.disenoWeb.text10')}</div>
                    <div className="col-12 text-start pb-4">{t('servicios.servicios.disenoWeb.text11')}</div>
                    <div className="col-12 fs-2 text-center">{t('servicios.servicios.disenoWeb.text12')}</div>
                    <div className="text-start d-lg-flex g-0 pb-4" data-aos="flip-left">
                        <div className="flex-fill m-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#credibility" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10">{t('servicios.servicios.disenoWeb.text13')}</div>
                                    <div className="col-2 fs-2 d-flex justify-content-center align-items-center"><i className="fas fa-caret-right"></i></div>
                                </div>
                            </button>
                        </div>
                        <div className="flex-fill m-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#reach" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10">{t('servicios.servicios.disenoWeb.text14')}</div>
                                    <div className="col-2 fs-2 d-flex justify-content-center align-items-center"><i className="fas fa-caret-right"></i></div>
                                </div>
                            </button>
                        </div>
                        <div className="flex-fill m-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#personal" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10">{t('servicios.servicios.disenoWeb.text15')}</div>
                                    <div className="col-2 fs-2 d-flex justify-content-center align-items-center"><i className="fas fa-caret-right"></i></div>
                                </div>
                            </button>
                        </div>
                        <div className="flex-fill m-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#where" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10">{t('servicios.servicios.disenoWeb.text16')}</div>
                                    <div className="col-2 fs-2 d-flex justify-content-center align-items-center"><i className="fas fa-caret-right"></i></div>
                                </div>
                            </button>
                        </div>
                        <div className="flex-fill m-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#time" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10">{t('servicios.servicios.disenoWeb.text17')}</div>
                                    <div className="col-2 fs-2 d-flex justify-content-center align-items-center"><i className="fas fa-caret-right"></i></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid textBlue bgLightGrey py-3">
                <div className="col-12 pb-4 fs-2" data-aos="fade-right">{t('servicios.servicios.ecommerce.text3')}</div>
                <div className="row g-0 text-center">
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up-right">
                        <div className="col-12 rounded shadow serviceSpan bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-laptop-code"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.disenoWeb.text3')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up">
                        <div className="col-12 rounded shadow serviceSpan bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-shopping-cart"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.disenoWeb.text4')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up">
                        <div className="col-12 rounded shadow serviceSpan bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-bullhorn"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.disenoWeb.text5')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up-left">
                        <div className="col-12 rounded shadow serviceSpan bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-envelope-open-text"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.disenoWeb.text6')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up-left">
                        <div className="col-12 rounded shadow serviceSpan bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="far fa-file-code"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.disenoWeb.text7')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up-left">
                        <div className="col-12 rounded shadow serviceSpan bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-puzzle-piece"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.disenoWeb.text8')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="offcanvas offcanvas-end bgLinearBlue text-white d-flex justify-content-center align-items-center" tabIndex="-1" id="credibility" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.disenoWeb.text13')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            {t('servicios.servicios.disenoWeb.text18')}
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end bgLinearBlue text-white d-flex justify-content-center align-items-center" tabIndex="-1" id="reach" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.disenoWeb.text14')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">
                                {t('servicios.servicios.disenoWeb.text19')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.disenoWeb.text20')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end bgLinearBlue text-white d-flex justify-content-center align-items-center" tabIndex="-1" id="personal" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.disenoWeb.text15')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">
                                {t('servicios.servicios.disenoWeb.text21')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.disenoWeb.text22')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.disenoWeb.text23')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.disenoWeb.text24')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end bgLinearBlue text-white d-flex justify-content-center align-items-center" tabIndex="-1" id="where" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.disenoWeb.text16')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">
                                {t('servicios.servicios.disenoWeb.text25')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.disenoWeb.text26')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end bgLinearBlue text-white overflow-auto" tabIndex="-1" id="time" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.disenoWeb.text17')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">
                                {t('servicios.servicios.disenoWeb.text27')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.disenoWeb.text28')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.disenoWeb.text29')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}