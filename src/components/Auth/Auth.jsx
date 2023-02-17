import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";
import FormInput from "../FormInput";
import Registration from "../Registration/Registration";

const Auth = () => {
	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const inputsAuth = [
		{
			id: 1,
			name: "email",
			type: "email",
			placeholder: "Ваш email",
			errorMessage: "Некорректный ввод email",
			label: "Ваш email",
			required: true,
		},

		{
			id: 2,
			name: "password",
			type: "password",
			placeholder: "Пароль",
			errorMessage:
				"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
			label: "Пароль",
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true,
		}
	];
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const onChange = (e) => {
		setValues({...values, [e.target.name]: e.target.value});
	};

	return (
		<div className="reg-form">
				<form onSubmit={handleSubmit}>
					<div className="logo-reg"></div>
					<h1>Вход</h1>
					<div className="form-inputs">
						{inputsAuth.map((input) => (
							<FormInput
								key={input.id}
								{...input}
								value={values[input.name]}
								onChange={onChange}
							/>
						))}
					</div>
					<div className="form-bottom-info form-bottom-info--space-between">
						<Link to="/forgot" className="form-bottom-info__link form-bottom-info__link--inner">Забыли пароль?</Link>
						<Link to="/registration" className="form-bottom-info__link">Регистрация</Link>
					</div>
					<button className="button">Войти</button>
				</form>
		</div>
	)
}

export default Auth;