import React from 'react';
import { useTranslation } from "react-i18next";
export const Marketing = () => {
    const { t, i18n } = useTranslation("global");
    return (
        <div className="container-fluid p-0 text-center text-white">
            <div className="container-fluid py-5 bg-white textBlue">
                <div className="container" data-aos="fade-up">
                    <div className="col-12 pb-4 fs-2">{t('servicios.servicios.digitalMarketing.text1')}</div>
                    <div className="col-12 pb-4 text-start">{t('servicios.servicios.digitalMarketing.text2')}</div>
                    <div className="col-12 text-start">{t('servicios.servicios.digitalMarketing.text3')}</div>
                    <div className="flip-left d-lg-flex g-0 pb-4" data-aos="">
                        <div className="flex-fill m-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#seo" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10 d-flex justify-content-center align-items-center px-3">{t('servicios.servicios.digitalMarketing.text4')}</div>
                                    <div className="col-2 fs-2 d-flex justify-content-center align-items-center"><i className="fas fa-caret-right"></i></div>
                                </div>
                            </button>
                        </div>
                        <div className="flex-fill m-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#sem" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10 d-flex justify-content-center align-items-center px-3">{t('servicios.servicios.digitalMarketing.text5')}</div>
                                    <div className="col-2 fs-2 d-flex justify-content-center align-items-center"><i className="fas fa-caret-right"></i></div>
                                </div>
                            </button>
                        </div>
                        <div className="flex-fill m-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#media" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10 d-flex justify-content-center align-items-center">{t('servicios.servicios.digitalMarketing.text6')}</div>
                                    <div className="col-2 fs-2 d-flex justify-content-center align-items-center"><i className="fas fa-caret-right"></i></div>
                                </div>
                            </button>
                        </div>
                        <div className="flex-fill m-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#advertisement" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10 d-flex justify-content-center align-items-center px-3">{t('servicios.servicios.digitalMarketing.text7')}</div>
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
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-search"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.digitalMarketing.text4')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-bullseye"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.digitalMarketing.text5')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="far fa-thumbs-up"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.digitalMarketing.text6')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-mail-bulk"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.digitalMarketing.text7')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="far fa-bell"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.digitalMarketing.text8')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-plus"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.digitalMarketing.text9')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="offcanvas offcanvas-end bgLinearBlue overflow-auto" tabIndex="-1" id="seo" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.digitalMarketing.text4')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">{t('servicios.servicios.digitalMarketing.text10')}</div>
                            <div className="col-12">{t('servicios.servicios.digitalMarketing.text11')}</div>
                            <div className="col-12">{t('servicios.servicios.digitalMarketing.text12')}</div>
                            <div className="col-12">{t('servicios.servicios.digitalMarketing.text13')}</div>

                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end bgLinearBlue overflow-auto" tabIndex="-1" id="sem" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.digitalMarketing.text5')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">
                                {t('servicios.servicios.digitalMarketing.text14')}
                            </div>
                            <div className="col-12 fw-bold">
                                {t('servicios.servicios.digitalMarketing.text15')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.digitalMarketing.text16')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.digitalMarketing.text17')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end bgLinearBlue d-flex justify-content-center align-items-center" tabIndex="-1" id="media" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.digitalMarketing.text6')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">
                                {t('servicios.servicios.digitalMarketing.text18')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end bgLinearBlue overflow-auto" tabIndex="-1" id="advertisement" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.digitalMarketing.text7')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">
                                {t('servicios.servicios.digitalMarketing.text19')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.digitalMarketing.text20')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}