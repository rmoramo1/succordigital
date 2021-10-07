import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";
import logo from '../assets/img/LOGO.jpg'

export const MenuMovil = () => {
    const { t, i18n } = useTranslation("global");
    return (
        <div className="d-block d-xl-none">
            <div className="menuMovil goldText">
                <div className="row pt-3">
                    <div className="col-12 text-center">
                        <button id="btnMenuMovil" className="btn position-relative" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-expanded="false" aria-controls="menu">
                            <i id="bars" className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="collapse linksMenu" id="menu">
                <div className="col-12 text-center">
                    <HashLink smooth to="/home#homeTop">
                        <img src={logo} className="img-fluid" alt="logo"></img>
                    </HashLink>
                </div>
                <div className="col-12 pr-5 text-uppercase">
                    <ul className="list-unstyled text-center">
                        <li className="nav-item">
                            <a className="nav-link" href="/about-us#aboutTop">{t('menu.text1')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/faqs#faqsTop">FAQS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services#serviciosTop">{t('menu.text2')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/store#storeTop">{t('menu.text3')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact#contact-usTop">{t('menu.text4')}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};