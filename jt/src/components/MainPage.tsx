import React from 'react';
import styles from '../styles/main-page.module.css';
import { useSelector } from '../hooks/useSelector';

type MainPageProps = {
	children?: React.ReactNode;
};

const MainPage = ({ children }: MainPageProps) => {
	const { role } = useSelector((state) => state.role);
	let bg_color: string = role === 'volunteer' ? '#6c969d' : '#99d5c9';
	console.log(bg_color, role);
	document.documentElement.style.setProperty('--bg-color', bg_color);

	return (
		<div className={styles.wrapper}>
			<img src="./icons/PoMOCNO.png" alt="pomocno logo" />
			{children}
		</div>
	);
};

export default MainPage;
