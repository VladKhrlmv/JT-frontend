import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/filler-message.module.css';

const FillerMessage = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.container}>
			<p className={styles.title}>{t('filler-message.title')}</p>
			<p className={styles.subtitle}>{t('filler-message.subtitle')}</p>
		</div>
	);
};

export default FillerMessage;
