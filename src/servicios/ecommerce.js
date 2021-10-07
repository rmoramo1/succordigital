import React from 'react';
import { useTranslation } from "react-i18next";
export const Ecommerce = () => {
    const { t, i18n } = useTranslation("global");
    return (
        <div className="container-fluid p-0 text-center text-white">
            <div className="container-fluid py-5 bg-white textBlue">
                <div className="container" data-aos="fade-up">
                    <div className="col-12 pb-4 fs-2">{t('servicios.servicios.ecommerce.text1')}</div>
                    <div className="col-12 pb-4">{t('servicios.servicios.ecommerce.text2')}</div>
                    <div className="text-start d-lg-flex g-0 pb-4" data-aos="flip-left">
                        <div className="flex-fill m-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#building" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10">{t('servicios.servicios.ecommerce.text4')}</div>
                                    <div className="col-2 fs-2 d-flex justify-content-center align-items-center"><i className="fas fa-caret-right"></i></div>
                                </div>
                            </button>
                        </div>
                        <div className="flex-fill m-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#management" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10 px-3">{t('servicios.servicios.ecommerce.text5')}</div>
                                    <div className="col-2 fs-2 d-flex justify-content-center align-items-center"><i className="fas fa-caret-right"></i></div>
                                </div>
                            </button>
                        </div>
                        <div className="flex-fill m-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#marketing" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10">{t('servicios.servicios.ecommerce.text6')}</div>
                                    <div className="col-2 fs-2 d-flex justify-content-center align-items-center"><i className="fas fa-caret-right"></i></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid textBlue bgLightGrey py-5">
                <div className="col-12 pb-4 fs-2" data-aos="fade-right">{t('servicios.servicios.ecommerce.text3')}</div>
                <div className="row g-0 text-center">
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up-right">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"> <i className="far fa-building"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.ecommerce.text4')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-desktop"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.ecommerce.text5')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-2" data-aos="fade-up">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"> <i className="fas fa-blog"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.ecommerce.text6')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="offcanvas offcanvas-end bgLinearBlue overflow-auto" tabIndex="-1" id="building" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.ecommerce.text4')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">
                                {t('servicios.servicios.ecommerce.text7')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.ecommerce.text8')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end bgLinearBlue d-flex justify-content-center align-items-center" tabIndex="-1" id="management" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.ecommerce.text5')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">
                                {t('servicios.servicios.ecommerce.text9')}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end bgLinearBlue d-flex justify-content-center align-items-center" tabIndex="-1" id="marketing" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.ecommerce.text6')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">
                                {t('servicios.servicios.ecommerce.text10')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}