import React from 'react';
import styles from '../styles/side-nav.module.css';
import { useSelector } from '../hooks/useSelector';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SideNav = () => {
	// const { role } = useSelector((state) => state.role);
	const { t } = useTranslation();
	let sidenav_items = ['home', 'chat', 'account', 'settings', 'help'];

	return (
		<div className={styles.sidenav}>
			<div className={styles.arrow}>
				<ArrowBackIcon fontSize="large" />
			</div>
			<nav className={styles.sidenav_items}>
				{sidenav_items.map((item) => {
					return <Link to={`/${item}`}>{t(`sidenav.${item}`)}</Link>;
				})}
			</nav>
		</div>
	);
};

export default SideNav;
