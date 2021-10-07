import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
/*componentes*/

export const Error = () => {
    const { t, i18n } = useTranslation("global");
    return (
        <div className="container-fluid p-0 bgBlack text-center">
            <Helmet>
                <title>404</title>
            </Helmet>
            <div className="sliderError slider pt-5">
                <div className="col-12 text-center">
                    <HashLink className="text-white btn btn-outline-light" smooth to="/home#homeTop">{t('buttons.inicio')}</HashLink>
                </div>
            </div>
        </div>
    );
};
