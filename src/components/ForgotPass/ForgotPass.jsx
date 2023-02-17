import React from 'react';
import {useState} from "react";
import FormInput from "../FormInput";

const ForgotPass = () => {

	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const inputsForgot = [
		{
			id: 1,
			name: "email",
			type: "email",
			placeholder: "Ваш email",
			errorMessage: "Некорректный ввод email",
			label: "Ваш email",
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
		<div className="reg-form reg-form__forgot">
			<form onSubmit={handleSubmit}>
				<div className="logo-reg"></div>
				<h1>Забыли пароль?</h1>
				<div className="reg-form__forgot-text">
					Мы пришлем на почту инструкцию для восстановления пароля
				</div>
				<div className="form-inputs">
					{inputsForgot.map((input) => (
						<FormInput
							key={input.id}
							{...input}
							value={values[input.name]}
							onChange={onChange}
						/>
					))}
				</div>
				<button className="button">Восстановить пароль</button>
				<div className="form-bottom-info">
					<a href="##" className="form-bottom-info__link">Вспомнил пароль</a>
				</div>
			</form>
		</div>
	)
}

export default ForgotPass;