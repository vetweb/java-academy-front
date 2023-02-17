import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="header__wrapper">
				<a className="header__logo" href="##">Логотип</a>
				<button className="burger-menu">
					<span className="burger-menu__icon"></span>
				</button>
				<div className="cart header__info">
					<span className="header__info-text">Корзина</span>
					<span className="header__info-icon">1</span>
				</div>
				<div className="notification header__info">
					<span className="header__info-text">Уведомления</span>
					<span className="header__info-icon">2</span>
				</div>
				<a href="##" className="header__profile"></a>
			</div>
		</div>
	);
}

export default Header;