import React from 'react';
import { useTranslation } from "react-i18next";
export const Copywriter = () => {
    const { t, i18n } = useTranslation("global");
    return (
        <div className="container-fluid p-0 text-center text-white">
            <div className="container-fluid py-5 bg-white textBlue">
                <div className="container text-start" data-aos="fade-up">
                    <div className="col-12 pb-4 fs-2 text-center">{t('servicios.servicios.copy.text1')}</div>
                    <div className="col-12 pb-4">{t('servicios.servicios.copy.text2')}</div>
                    <div className="col-12">{t('servicios.servicios.copy.text17')}</div>
                    <div className="col-12">{t('servicios.servicios.copy.text18')}</div>
                    <div className="col-12">{t('servicios.servicios.copy.text19')}</div>
                    <div className="row py-5 text-center" data-aos="flip-left">
                        <div className="col-12 col-lg-6 mt-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#storytelling" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10 d-flex justify-content-center align-items-center px-3">{t('servicios.servicios.copy.text11')}</div>
                                    <div className="col-2 fs-2 d-flex justify-content-center align-items-center"><i className="fas fa-caret-right"></i></div>
                                </div>
                            </button>
                        </div>
                        <div className="col-12 col-lg-6 mt-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#ghostwriter" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10 d-flex justify-content-center align-items-center px-3">{t('servicios.servicios.copy.text13')}</div>
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
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up-right">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-blog"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.copy.text3')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-desktop"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.copy.text4')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="far fa-file-alt"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.copy.text5')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="far fa-newspaper"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.copy.text6')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-envelope-open-text"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.copy.text7')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="far fa-envelope"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.copy.text8')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-ad"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.copy.text9')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-plus"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.copy.text10')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="offcanvas offcanvas-end bgLinearBlue overflow-auto" tabIndex="-1" id="storytelling" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.copy.text11')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">
                                {t('servicios.servicios.copy.text14')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.copy.text15')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.copy.text16')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end bgLinearBlue overflow-auto" tabIndex="-1" id="ghostwriter" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.copy.text13')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">
                                {t('servicios.servicios.copy.text20')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.copy.text21')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.copy.text22')}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}