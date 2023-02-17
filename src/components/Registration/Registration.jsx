import React from 'react';
import {useState} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import FormInput from "../FormInput";
const Registration = () => {

	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const inputs = [
		{
			id: 1,
			name: "email",
			type: "email",
			placeholder: "Ваше имя",
			errorMessage: "Некорректный ввод email",
			label: "Ваше имя",
			required: true,
		},
		{
			id: 2,
			name: "username",
			type: "text",
			placeholder: "Ваше имя",
			errorMessage:
				"Имя должно содержать минимум 3 текстовых/числовых символа",
			label: "Ваше имя",
			pattern: "^[A-Za-z0-9]{3}$",
			required: true,
		},
		{
			id: 4,
			name: "password",
			type: "password",
			placeholder: "Пароль",
			errorMessage:
				"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
			label: "Пароль",
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true,
		},
		{
			id: 5,
			name: "confirmPassword",
			type: "password",
			placeholder: "Подтверждение пароля",
			errorMessage: "Пароли не совпадают",
			label: "Подтверждение пароля",
			pattern: values.password,
			required: true,
		},
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
				<h1>Регистрация</h1>
				<div className="form-inputs">
					{inputs.map((input) => (
						<FormInput
							key={input.id}
							{...input}
							value={values[input.name]}
							onChange={onChange}
						/>
					))}
				</div>
				<div className="form-bottom-info">
					<span className="form-bottom-info__text">Уже есть пароль?</span>
					<Link to="/auth" className="form-bottom-info__link">Войти</Link>
				</div>
				<button className="button">Submit</button>
			</form>
		</div>
	)
}

export default Registration;