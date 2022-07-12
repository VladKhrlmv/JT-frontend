import React, { useState } from 'react';
import styles from '../styles/register.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Register = () => {
	const { t } = useTranslation();
	const [error, setError] = useState('');
	const [input, setInput] = useState({
		username: '',
		password: '',
		passwordConfirm: '',
	});
	const validateInput = () => {
		input.password !== input.passwordConfirm
			? setError('Passwords do not match')
			: setError('');
	};

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInput((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className={styles.container}>
			<p className={styles.greeting}>{t('register.greeting')}</p>
			<p className={styles.register}>{t('register.title')}</p>
			<label className={styles.username_label} htmlFor="username">
				{t('register.username')}
			</label>
			<input
				className={styles.username}
				name="username"
				type="text"
				alt="username"
				placeholder="Username"
				required
				value={input.username}
				onChange={onInputChange}
			/>
			<label className={styles.password_label} htmlFor="password">
				{t('register.password')}
			</label>
			<input
				className={styles.password}
				name="password"
				type="password"
				alt="Password"
				placeholder="Password"
				required
				value={input.password}
				onChange={onInputChange}
				onBlur={validateInput}
			/>
			<label
				className={styles.repeat_password_label}
				htmlFor="repeat_password"
			>
				{t('register.repeat_password')}
			</label>
			<input
				className={styles.repeat_password}
				name="passwordConfirm"
				type="password"
				alt="Repeat password"
				placeholder="Repeat password"
				required
				value={input.passwordConfirm}
				onChange={onInputChange}
				onBlur={validateInput}
			/>
			<Link to="/v/login" className={styles.login_link}>
				{t('register.have_account')}
			</Link>

			{error ? (
				<p className={styles.error}>{error}</p>
			) : (
				<p className={styles.error}></p>
			)}

			<button className={styles.sign_in_button}>
				{t('register.sign_in')}
			</button>
		</div>
	);
};

export default Register;
