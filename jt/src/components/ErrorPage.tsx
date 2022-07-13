import React from 'react';
import styles from '../styles/error-page.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.container}>
			<p className={styles.error_message}>{t('error.title')}</p>
			<Link className={styles.link} to="/">
				{t('error.message')}
			</Link>
		</div>
	);
};

export default ErrorPage;
