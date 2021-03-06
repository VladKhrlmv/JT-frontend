import React from 'react';
import styles from '../styles/side-nav.module.css';
import { useSelector } from '../hooks/useSelector';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SideNav = () => {
	// const { role } = useSelector((state) => state.role);
	const { t } = useTranslation();
	let sidenav_items = ['home', 'chat', 'account', 'settings', 'help'];
	const { role } = useSelector((state) => state.role);
	const role_route = role === 'volunteer' ? 'v' : 'n';

	return (
		<div className={styles.sidenav}>
			<div className={styles.arrow}>
				<ArrowBackIcon fontSize="large" />
			</div>
			<nav className={styles.sidenav_items}>
				{sidenav_items.map((item) => {
					return (
						<NavLink
							key={item}
							style={({ isActive }) => {
								return {
									boxShadow: isActive
										? '10px 10px 1px #00000029'
										: '',
									backgroundColor: isActive
										? 'var(--secondary-color)'
										: '',
								};
							}}
							to={`/${role_route}/${item}`}
						>
							{t(`sidenav.${item}`)}
						</NavLink>
					);
				})}
				<NavLink to={'/'}>{t('sidenav.logout')}</NavLink>
			</nav>
		</div>
	);
};

export default SideNav;
