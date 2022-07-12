import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.container}>
			<p className={styles.greeting}>{t('login.greeting')}</p>
			<p className={styles.login}>{t('login.title')}</p>
			<label className={styles.username_label} htmlFor="username">
				{t('login.username')}
			</label>
			<input
				className={styles.username}
				type="text"
				alt="username"
				placeholder="Username"
				required
			/>
			<label className={styles.password_label} htmlFor="password">
				{t('login.password')}
			</label>
			<input
				className={styles.password}
				type="password"
				alt="Password"
				placeholder="Password"
				required
			/>
			<Link to="/register" className={styles.register_link}>
				{t('login.no_account')}
			</Link>
			<button className={styles.login_button}>{t('login.title')}</button>
		</div>
	);
};

export default Login;
