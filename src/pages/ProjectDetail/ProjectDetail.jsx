import React from 'react';
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../style/content.css";

import {Accordion, AccordionItem} from '@szhsin/react-accordion';

const ProjectDetail = () => {
	const items0 = [
		{
			header: "Описание этапа", content: "Lorem ipsum dolor sit amet. br"
		},
	];
	const items = [
		{
			header: "Создать 4 модели авто: camry (легковой авто), solara (кабриолет), hiance (грузовой фургон)",
			content: "Lorem ipsum dolor sit amet. br"
		},
	];
	const items2 = [
		{header: "Title 1", content: "Lorem ipsum dolor sit amet."},
		{header: "Title 2", content: "Lorem ipsum dolor sit amet."},
		{header: "Title 3", content: "Lorem ipsum dolor sit amet."},
	];

	return (
		<div>
			<Header/>
			<div className="project">
				<div className="content">
					<div className="back-page">
						<a href="##" className="back-page__link">Назад</a>
					</div>
					<div className="content__wrapper">
						<div className="content__left">
							<div className="content-box">
								<div className="content__top-info">
									<div className="content__top">
										<Link to="/project" className="content__title content__title--link">Проект Тоyota</Link>
										<span className="content__stage">Этап 1</span>
									</div>
									<div className="content__bottom">
										<div className="module-str">
											<span className="module-str__type">Модуль</span>
											<a href="##" className="module-str__link">SQL</a>
										</div>
										<span className="content__status status status--work">В работе</span>
									</div>
								</div>
							</div>
							<div className="content-section">
								<Accordion className="content-section--inner">
									{items0.map(({header, content}, i) => (
										<AccordionItem className="szh-accordion__item--expanded accordion-show" header={header} key={i}>
											<div className="content-box">
												<div className="content-box__text">{content}</div>
											</div>
										</AccordionItem>
									))}
								</Accordion>
							</div>
							<div className="content-section">
								<div className="content-box">
									<Accordion>
										{items.map(({header, content}, i) => (
											<AccordionItem header={header} key={i}>
												{content}
											</AccordionItem>
										))}
									</Accordion>
								</div>
							</div>

							<div className="content-section content-section--number">
								<div className="content-section__title">Требования</div>
								<div className="content-box">
									<div className="content-box__text">Создать новый проект</div>
								</div>
								<div className="content-box">
									<div className="content-box__text">Создать новый репозиторий на гитхабе, связанный с
										этим
										проектом
									</div>
								</div>
							</div>

							<div className="content-section content-section--number">
								<div className="content-section__title">Требования</div>
								<div className="content-box">
									<div className="content-box__text">Создать новый проект</div>
								</div>
								<Accordion>
									{items2.map(({header, content}, i) => (
										<div className="content-box">
											<AccordionItem header={header} key={i}>
												{content}
											</AccordionItem>
										</div>
									))}
								</Accordion>
							</div>
							<div className="content-section">
								<div className="content-section__title">Решение</div>
								<div className="content-box">
									<div className="result-stage">
										<div className="result-stage__title">Решение</div>
										<div className="result-stage__line">
											<div className="result-stage__line-title">https://githab/1351351651515</div>
											<div className="result-stage__line-caption">Отправлено 10:25 10.01.23</div>
										</div>
									</div>
									<div className="result-stage">
										<div className="result-stage__title">Комментарий</div>
										<div className="result-stage__line">
											<div className="result-stage__line-title">Нужно исправить это и это</div>
											<div className="result-stage__line-caption"> 10:50 10.01.23</div>
										</div>
									</div>
								</div>
								<div className="content-box">
									<div className="result-stage">
										<div className="result-stage__line">
											<div className="result-stage__line-title">https://githab/1351351651515</div>
											<div className="result-stage__line-caption">Отправлено 10:25 10.01.23</div>
										</div>
									</div>
								</div>
								<div className="content-box">
									<div className="form-line">
										<form>
											<div className="form-line__item">
												<label htmlFor="getLink" className="form-line__item-label">Отправь ссылку на GitHub</label>
												<input id="getLink" type="text" placeholder="http://"/>
												<button type="submit" className="button">Отправить решение</button>
											</div>
										</form>
									</div>
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
					<div className="back-page">
						<a href="##" className="back-page__link">Назад</a>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default ProjectDetail;