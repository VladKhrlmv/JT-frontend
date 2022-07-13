import React, { useEffect } from 'react';
import styles from '../styles/main-page.module.css';
import { useSelector } from '../hooks/useSelector';
import SideNav from './SideNav';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import logo from '../img/PoMOCNO.png';

type MainPageProps = {
	children?: React.ReactNode;
};

const MainPage = ({ children }: MainPageProps) => {
	const { role } = useSelector((state) => state.role);
	let primary_color: string = '#99d5c9';
	let secondary_color: string = '#6c969d';
	if (role === 'volunteer') {
		primary_color = '#6c969d';
		secondary_color = '#99d5c9';
	}

	document.documentElement.style.setProperty(
		'--primary-color',
		primary_color
	);

	document.documentElement.style.setProperty(
		'--secondary-color',
		secondary_color
	);

	const navigate = useNavigate();
	let location = useLocation();
	useEffect(() => {
		if (location.pathname === '/n') {
			navigate('/n/home');
		}
		if (location.pathname === '/v') {
			navigate('/v/home');
		}
	}, [location.pathname]);

	return (
		<>
			<SideNav />
			<div className={styles.wrapper}>
				<img className={styles.logo} src={logo} alt="pomocno logo" />
				<Outlet />
			</div>
		</>
	);
};

export default MainPage;
