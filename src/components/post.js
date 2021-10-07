import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useTranslation } from "react-i18next";

const Post = props => {
    const { store, actions } = useContext(Context);
    const { t, i18n } = useTranslation("global");

    return (
        <div className="col-12 p-1 p-xl-5 textBlue ">
            <div className="col-12 rounded shadow-lg overflow-hidden">
                <div className="imgpost">
                    <img className="img-fluid" src={props.url} alt="image of post"></img>
                </div>
                <div className="p-3">
                    <div className="col-12 bodyPost py-4">
                        <div className="row g-0 py-3">
                            <div className="col-6">
                                <span className="">{t('post.text1')} </span> <span id="written" className="textLightBlue">{props.autor}</span>
                            </div>
                            <div className="col-6">
                                <i className="far fa-calendar-alt"></i> <span id="date" className="textLightBlue"> {props.date}</span>
                            </div>
                        </div>
                        <div id="titlePost" className="col-12 fs-3">
                            {props.title}
                        </div>
                        <div id="contentPost" className="col-12">
                            {props.yoast_head_json}
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="row g-0">
                            <div className="col-6">
                                <span className="me-3"><i className="fas fa-share-alt"></i></span> {t('post.text2')}
                            </div>
                            <div className="col-6">
                                <Link className="btn btnBlue" to={{ pathname: props.link }} target="_blank">{t('buttons.READMORE')} <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Post.propTypes = {
    title: PropTypes.string,
    yoast_head_json: PropTypes.string,
    link: PropTypes.string,
    url: PropTypes.string,
    categories: PropTypes.string,
    date: PropTypes.string,
};
export default Post;
