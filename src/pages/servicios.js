import { Helmet } from "react-helmet";
import { HashLink } from 'react-router-hash-link';
import React, { useState } from 'react';
import "../../node_modules/aos/dist/aos.css";
import { useTranslation } from "react-i18next";
/*componentes*/
import { DisenoGrafico } from '../servicios/diseno-grafico';
import { Programing } from '../servicios/programing';
import { Marketing } from '../servicios/marketing';
import { Copywriter } from '../servicios/copywriter';
import { Ecommerce } from '../servicios/ecommerce';

import { CallToAction } from '../components/callToAction';
/* img */

export const Servicios = () => {
    const { t, i18n } = useTranslation("global");

    return (
        <div className="container-fluid text-white p-0" id="serviciosTop">
            <div className="container  text-white text-center py-5">
                <div className="col-12 display-5 text-center" data-aos="zoom-in">{t('servicios.span1.text1')} </div>
                <div className="col-12 text-center" data-aos="zoom-in">{t('servicios.span1.text2')}</div>
            </div>
            <div className="container-fluid p-0" >
                <div className="row g-0">
                    <div className="col-12 col-lg-2 bgBlue">
                        <div className="stick" id="selectServices">
                            <ul className="nav nav-pills mb-3 text-center" id="pills-tab" role="tablist">
                                <li className="nav-item col-12" role="presentation">
                                    <div className="menuServicios active" id="pills-diseño-web-tab" data-bs-toggle="pill" data-bs-target="#pills-diseño-web" type="button" role="tab" aria-controls="pills-diseño-web" aria-selected="true">{t('servicios.span2.text1')} <i className="fas fa-caret-right"></i></div>
                                </li>
                                <li className="nav-item col-12" role="presentation">
                                    <div className="menuServicios" id="pills-diseño-grafico-tab" data-bs-toggle="pill" data-bs-target="#pills-diseño-grafico" type="button" role="tab" aria-controls="pills-diseño-grafico" aria-selected="false">{t('servicios.span2.text2')} <i className="fas fa-caret-right"></i></div>
                                </li>
                                <li className="nav-item col-12" role="presentation">
                                    <div className="menuServicios" id="pills-marketing-tab" data-bs-toggle="pill" data-bs-target="#pills-marketing" type="button" role="tab" aria-controls="pills-marketing" aria-selected="false">{t('servicios.span2.text3')} <i className="fas fa-caret-right"></i></div>
                                </li>


                                <li className="nav-item col-12" role="presentation">
                                    <div className="menuServicios" id="pills-copy-tab" data-bs-toggle="pill" data-bs-target="#pills-copy" type="button" role="tab" aria-controls="pills-copy" aria-selected="false">{t('servicios.span2.text4')} <i className="fas fa-caret-right"></i></div>
                                </li>
                                <li className="nav-item col-12" role="presentation">
                                    <div className="menuServicios" id="pills-news-tab" data-bs-toggle="pill" data-bs-target="#pills-news" type="button" role="tab" aria-controls="pills-news" aria-selected="false">{t('servicios.span2.text5')} <i className="fas fa-caret-right"></i></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-10 overflow-hidden">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-diseño-web" role="tabpanel" aria-labelledby="pills-diseño-web-tab"><Programing /></div>
                            <div className="tab-pane fade" id="pills-diseño-grafico" role="tabpanel" aria-labelledby="pills-diseño-grafico-tab">< DisenoGrafico /></div>
                            <div className="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab"><Marketing /></div>
                            <div className="tab-pane fade" id="pills-copy" role="tabpanel" aria-labelledby="pills-copy-tab"><Copywriter /> </div>
                            <div className="tab-pane fade" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab"><Ecommerce /> </div>
                        </div>
                    </div>
                </div>

            </div>
            <CallToAction />
        </div>
    );
};
