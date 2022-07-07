import React from 'react';
import styles from '../styles/main-page.module.css';
import { useSelector } from '../hooks/useSelector';
import SideNav from './SideNav';

type MainPageProps = {
	children?: React.ReactNode;
};

const MainPage = ({ children }: MainPageProps) => {
	const { role } = useSelector((state) => state.role);
	let bg_color: string = role === 'volunteer' ? '#6c969d' : '#99d5c9';
	document.documentElement.style.setProperty('--bg-color', bg_color);

	return (
		<>
			<SideNav />
			<div className={styles.wrapper}>
				<img src="./icons/PoMOCNO.png" alt="pomocno logo" />
				{children}
			</div>
		</>
	);
};

export default MainPage;
