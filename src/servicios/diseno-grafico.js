import React from 'react';
import { useTranslation } from "react-i18next";
export const DisenoGrafico = () => {
    const { t, i18n } = useTranslation("global");
    return (
        <div className="container-fluid p-0 text-center text-white">
            <div className="container-fluid py-5 bg-white textBlue">
                <div className="container" data-aos="fade-up">
                    <div className="col-12 pb-4 fs-2">{t('servicios.servicios.graphicDesign.text1')}</div>
                    <div className="col-12 pb-4 text-start">{t('servicios.servicios.graphicDesign.text2')}</div>
                    <div className="col-12 pb-4 text-start">{t('servicios.servicios.graphicDesign.text3')}</div>
                    <div className="col-12 text-start">{t('servicios.servicios.graphicDesign.text4')}</div>
                    <div className="row py-5" data-aos="flip-left">
                        <div className="col-12 col-lg-6 mt-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#color" aria-controls="offcanvasRight">
                                <div className="row g-0">
                                    <div className="col-10">{t('servicios.servicios.graphicDesign.text14')}</div>
                                    <div className="col-2 fs-2 d-flex justify-content-center align-items-center"><i className="fas fa-caret-right"></i></div>
                                </div>
                            </button>
                        </div>
                        <div className="col-12 col-lg-6 mt-2">
                            <button className="btn btn-line-blue" type="button" data-bs-toggle="offcanvas" data-bs-target="#journey" aria-controls="offcanvasRight">
                            <div className="row g-0">
                                    <div className="col-10">{t('servicios.servicios.graphicDesign.text15')}</div>
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
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-pen-nib"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.graphicDesign.text5')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-file-invoice"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.graphicDesign.text6')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="far fa-images"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.graphicDesign.text7')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-draw-polygon"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.graphicDesign.text8')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-icons"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.graphicDesign.text9')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="far fa-object-group"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.graphicDesign.text10')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-book-open"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.graphicDesign.text11')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-book"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.graphicDesign.text12')}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mx-auto col-lg-3 p-2" data-aos="fade-up-left">
                        <div className="col-12 serviceSpan rounded shadow bg-white p-3">
                            <div className="col-12 display-3 text-light-blue"><i className="fas fa-share-alt"></i></div>
                            <div className="col-12 fw-bold py-3 borderB">
                                {t('servicios.servicios.graphicDesign.text13')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="offcanvas offcanvas-end bgLinearBlue d-flex justify-content-center align-items-center" tabIndex="-1" id="color" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.graphicDesign.text14')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            {t('servicios.servicios.graphicDesign.text16')}
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end bgLinearBlue overflow-auto" tabIndex="-1" id="journey" aria-labelledby="offcanvasRightLabel">
                    <div>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">{t('servicios.servicios.graphicDesign.text15')}</h5>
                            <button type="button" className="btn text-white fs-3" data-bs-dismiss="offcanvas" aria-label="Close"><i className="far fa-times-circle"></i></button>
                        </div>
                        <div className="offcanvas-body text-start">
                            <div className="col-12">
                                {t('servicios.servicios.graphicDesign.text17')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.graphicDesign.text18')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.graphicDesign.text19')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.graphicDesign.text20')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.graphicDesign.text21')}
                            </div>
                            <div className="col-12">
                                {t('servicios.servicios.graphicDesign.text22')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}