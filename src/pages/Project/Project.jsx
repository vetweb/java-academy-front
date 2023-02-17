import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../style/content.css";

const Project = () => {
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
								<div className="content-box">
									<div className="content__top-info">
										<div className="content__top">
											<span className="content__title">Проект Тоyota</span>
										</div>
										<div className="content__bottom">
											<div className="module-str">
												<span className="module-str__type">Модуль</span>
												<a href="##" className="module-str__link">SQL</a>
											</div>
											<span className="content__status status status--work">В работе</span>
										</div>
									</div>
									<div className="content__box content-box--inner">
										<div className="content__box-title">
											Описание этапа
										</div>
										<p>На этом проекте с тобой создадим приложение, которое будет эмулировать весь
											процесс производства и продажи компании Toyota.</p>
										<p>
											Первым делом мы пойдем в конструкторское бюро! Нам нужно будет создать несколько
											новых моделей машины, описать их свойства: такие как цвет, количество сидений,
											максимальная скорость и так далее. Но мало того, что описать их свойства, нужно
											описать еще и детали, из которых они будут состоять!
										</p>
										<p>
											Когда мы закончим с деталями, нам нужно будет реализовать функции каждой модели:
											езду, торможение, включение разных датчиков, если что то пойдет не так!
										</p>
									</div>
									<div className="stages">
										<div className="stage__item">
											<a href="##" className="stage__item-link">Этап 1</a>
											<div className="stage__item-status">
												<i className="icon icon--check"></i>
												<span className="stage__item-status-text">Принят</span>
											</div>
										</div>
										<div className="stage__item stage__item--hold">
											<a href="##" className="stage__item-link">Этап 2</a>
											<div className="stage__item-status">
												<span className="stage__item-status-text">Ожидает решения</span>
											</div>
										</div>
										<div className="stage__item stage__item--disabled">
											<a href="##" className="stage__item-link">Этап 3</a>
											<div className="stage__item-status">
												<span className="stage__item-status-text">Откроется после выполнения предыдущих этапов</span>
											</div>
										</div>
										<div className="stage__item stage__item--disabled">
											<a href="##" className="stage__item-link">Этап 4</a>
											<div className="stage__item-status">
												<span className="stage__item-status-text">Откроется после выполнения предыдущих этапов</span>
											</div>
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
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default Project;