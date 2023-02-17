import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../style/content.css";
import {Accordion, AccordionItem} from "@szhsin/react-accordion";

const Module = () => {
	const item = [
		{
			header: "Просмотрено 1", content: "Lorem ipsum dolor sit amet. br"
		},
	];

	return (
		<div>
			<Header/>
			<div className="page">
				<div className="project">
					<div className="content">
						<div className="back-page">
							<a href="##" className="back-page__link">Назад</a>
						</div>
						<div className="content__wrapper">
							<div className="content__left">
								<div className="content-section__top">
									<div className="content-section__inner-title">Модуль SQL</div>
									<div className="progress-bar">
										<div className="progress-bar__line">
											<div className="progress-bar__line-step" style={{width: '50%'}}></div>
										</div>
										<span className="progress-bar__text">50%</span>
									</div>
								</div>
								<Accordion className="content-section--inner accordion-inner">
									{item.map(({header, content}, i) => (
										<AccordionItem header={header} key={i}>
											<div className="content-box">
												<div className="content-box__text">{content}</div>
											</div>
										</AccordionItem>
									))}
								</Accordion>
								<div className="test-info-bottom">
									<div className="test-info-bottom__title">Итоговый тест</div>
									<div className="test-info-bottom__button">
										<button className="button">Пройти</button>
									</div>
								</div>
							</div>
							<div className="content__right">
								<div className="content-box content-box--sm">
									<div className="teacher">
										<div className="teacher__title">Мой куратор</div>
										<div className="teacher__tg">
											В любой непонятной ситуации - пиши
											<a className="teacher__tg-icon" href="##"><i className="icon icon--tg"></i></a>
										</div>
										<div className="teacher__info">
											<span className="teacher__info-img"></span>
											<span className="teacher__info-fio">
												Константин Константинопольский
										</span>
											<a className="teacher__info-tg teacher__tg-icon" href="##"><i className="icon icon--tg"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default Module;