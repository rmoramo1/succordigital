import { Helmet } from "react-helmet";
import { send } from 'emailjs-com';
import React, { useState } from 'react';
import "../../node_modules/aos/dist/aos.css";
import { useTranslation } from "react-i18next";
/*componentes*/

/* img */

export const ContactUs = () => {
    const { t, i18n } = useTranslation("global");
    const [toSend, setToSend] = useState({
        fullname: '',
        email: '',
        message: '',
        phone: '',
    });

    const contact = (e) => {
        e.preventDefault();
        send(
            'service_5ihc1yh',
            'template_wxz9lki',
            toSend,
            'user_ueDJqGkpi3yp8nodYgnsk'
        )
            .then((response) => {
                alert("The form was sent correctly");
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                alert("The form was not submitted correctly");
                console.log('FAILED...', err);
            });
        e.target.reset()
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className="container-fluid p-0" id="contact-usTop">
            <div className="slider sliderContact d-flex justify-content-center align-items-center">
                <div className="row g-0">
                    <div className="col-12 col-lg-6 text-center d-flex justify-content-center align-items-center">
                        <div className="bgBlueTrans p-3" data-aos="fade-right">
                            <h2 className="display-5">{t('contact.slider.text1')}</h2>
                            <p >{t('contact.slider.text2')}</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 p-0" data-aos="fade-left">
                        <form onSubmit={contact} className="text-uppercase">
                            <div className="row g-0">
                                <div className="col-12 offset-xl-4 col-xl-4 p-2">
                                    <input className="col-12 my-3 rounded shadow" name="fullname" id="fullname" type="text" placeholder={t('contact.form.text1')} aria-label="fullname" value={toSend.fullname} onChange={handleChange} required />
                                </div>
                                <div className="col-12 offset-xl-4 col-xl-4 p-2">
                                    <input className="col-12 my-3 rounded shadow" name="phone" id="phone" type="tel" placeholder={t('contact.form.text2')} aria-label="phone" value={toSend.phone} onChange={handleChange} required />
                                </div>
                                <div className="col-12 offset-xl-4 col-xl-4 p-2">
                                    <input className="col-12 my-3 rounded shadow" name="email" id="emailAddress" type="mail" placeholder={t('contact.form.text3')} aria-label="emailAddress" value={toSend.email} onChange={handleChange} required />
                                </div>
                                <div className="col-12 offset-xl-4 col-xl-4 p-2">
                                    <textarea className="col-12 rounded shadow" id="message" name="message" rows="5" placeholder={t('contact.form.text4')} value={toSend.message} onChange={handleChange}></textarea>
                                </div>
                                <div className="col-12 text-center py-5">
                                    <button className="btnBlue btn" type="submit">{t('buttons.submit')} <i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
