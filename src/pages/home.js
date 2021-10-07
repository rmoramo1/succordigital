import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import { send } from 'emailjs-com';
import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/
import Post from "../components/post";
/* img */


export const Home = () => {
	const { t, i18n } = useTranslation("global");
	const { store, actions } = useContext(Context);
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
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
		<div className="container-fluid p-0 overflow-hidden" id="homeTop">
			<div id="sliderHome" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="slider sliderHome">
							<div className="circle-span position-absolute d-flex justify-content-center align-items-center">
								<div className=" circles"></div>
							</div>
							<div className="text-center pt-5" data-aos="fade-up" data-aos-duration="2000">
								<h2 className="display-5">{t('home.slider.text1')}</h2>
								<p>{t('home.slider.text2')}</p>
								<p>{t('home.slider.text3')}</p>
								<p>{t('home.slider.text4')}</p>
								<div className="col-12 text-center">
									<HashLink to="/services" className="btn btn-outline-light col-2">{t('buttons.mas')}</HashLink>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="slider slider-marketing d-flex justify-content-center align-items-center">
							<div className="text-start pt-5 col-6 offset-lg-4 fs-3" data-aos="fade-up" data-aos-duration="2000">
								<p className="text-center">{t('home.slider2.text1')}</p>
								<p>{t('home.slider2.text2')}</p>
								<div className="col-12 text-center">
									<HashLink to="/contact#contact-usTop" className="btn btn-outline-light col-2">{t('buttons.contacto')}</HashLink>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="slider sliderWeb d-flex align-items-center">
							<div className="text-center pt-5 row w-100" data-aos="fade-up" data-aos-duration="2000">
								<div className="col-12 col-lg-6 offset-lg-1">
									<h2 className="display-5">{t('home.slider3.text1')}</h2>
									<p>{t('home.slider3.text2')}</p>
									<div className="col-12 text-center">
										<HashLink to="/services" className="btn btn-outline-light col-2">{t('buttons.mas')}</HashLink>
									</div>
									
								</div>
								<div className="col-12 col-lg-4">

								</div>
							</div>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#sliderHome" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#sliderHome" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div className="container-fluid bgLightGrey py-5 text-center shadow">
				<div className="container">
					<div className="col-12 display-5" data-aos="zoom-in-up">
						{t('home.span1.text1')}
					</div>
					<div className="row g-0">
						<div className="col-12 col-lg-2 d-flex justify-content-center align-items-center display-2 text-light-blue" data-aos="zoom-in" data-aos-duration="2000">
							<i className="fas fa-globe"></i>
						</div>
						<div className="col-12 col-lg-10 text-start">
							<div className="row g-0 py-5">
								<div className="col-12" data-aos="zoom-in-up">
									{t('home.span1.text2')}
								</div>
								<div className="col-12" data-aos="zoom-in-up" data-aos-duration="2000">
									<div className="col-12">{t('home.span1.text3')}</div>
								</div>
								<div className="col-12" data-aos="zoom-in-up" data-aos-duration="2000">
									<div className="col-12">{t('home.span1.text4')}</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid py-5">
				<div className="col-12 fs-1 text-center" data-aos="zoom-in" data-aos-duration="2000">
					{t('home.span1.text5')}
				</div>
				<div className="col-12 text-center" data-aos="zoom-in" data-aos-duration="2000">{t('home.span1.text6')}</div>
				<div className="col-12 text-center" data-aos="zoom-in" data-aos-duration="2000">{t('home.span1.text6-1')}</div>
			</div>
			<div className="container-fluid bgDarkBlue shadowTop text-white py-5">
				<div className="container">
					<div className="row g-0 text-center">
						<div className="col-12 col-lg-6 p-lg-3" data-aos="flip-left" data-aos-duration="2000">
							<div className="col-12 rounded shadow bgLinearBlue minH50vh p-lg-3 d-flex justify-content-center align-items-center">
								<div>
									<div className="col-12 fs-1">
										<i className="fas fa-mouse-pointer"></i>
									</div>
									<div className="col-12 fs-2 py-3">{t('home.span1.text7')}</div>
									<div className="col-12">{t('home.span1.text8')}</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-6 p-lg-3 " data-aos="flip-left" data-aos-duration="2000">
							<div className="col-12 rounded shadow bgLinearBlue minH50vh p-lg-3 d-flex justify-content-center align-items-center">
								<div>
									<div className="col-12 fs-1">
										<i className="far fa-handshake"></i>
									</div>
									<div className="col-12 fs-2 py-3">{t('home.span1.text9')}</div>
									<div className="col-12">{t('home.span1.text10')}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid py-2" >
				<div className="row g-0" data-aos="fade-up">
					<div className="col-12 col-lg-6 p-3 text-center d-flex justify-content-center align-items-center">
						<div className="">
							<div className="col-12 display-6">
								{t('home.span1.call1')}
							</div>
							<div className="col-12 display-6">
								{t('home.span1.call2')}
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-4 p-0">
						<form onSubmit={contact} className="text-uppercase">
							<div className="row g-0">
								<div className="col-12 p-2">
									<input className="col-12 rounded shadow" name="fullname" id="fullname" type="text" placeholder={t('contact.form.text1')} aria-label="fullname" value={toSend.fullname} onChange={handleChange} required />
								</div>
								<div className="col-12 p-2">
									<input className="col-12 rounded shadow" name="phone" id="phone" type="tel" placeholder={t('contact.form.text2')} aria-label="phone" value={toSend.phone} onChange={handleChange} required />
								</div>
								<div className="col-12 p-2">
									<input className="col-12 rounded shadow" name="email" id="emailAddress" type="mail" placeholder={t('contact.form.text3')} aria-label="emailAddress" value={toSend.email} onChange={handleChange} required />
								</div>
								<div className="col-12 p-2">
									<textarea className="col-12 rounded shadow" id="message" name="message" rows="5" placeholder={t('contact.form.text4')} value={toSend.message} onChange={handleChange}></textarea>
								</div>
								<div className="col-12 text-center">
									<button className="btnBlue btn" type="submit">{t('buttons.submit')} <i className="bi bi-arrow-right"></i></button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			{/* <div className="col-12 text-center display-5 bgLightGrey pt-5">
				{t('home.span1.text38')}
			</div>
			<div className="row g-0 bgLightGrey">
				{store.post.map((item, index) => {
					if (index < 6) {
						return (
							<div className="col-12 col-lg-6 p-0" key={index} data-aos="fade-up">
								<Post
									title={item.title.rendered}
									yoast_head_json={item.yoast_head_json.og_description}
									link={item.link}
									url={item.featured_image_url}
									date={item.modified_gmt}
									autor={item.author_meta.display_name}
									categories={item.categories.category_name}
								/>
							</div>
						);
					}
				})}
			</div> */}
		</div>
	);
};
