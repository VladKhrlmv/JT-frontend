import React from 'react';
import '../styles/main-page.css';

type MainPageProps = {
	children?: React.ReactNode;
};

const MainPage = ({ children }: MainPageProps) => {
	return (
		<div className="wrapper">
			<img src="./icons/PoMOCNO.png" alt="pomocno logo" />
			{children}
		</div>
	);
};

export default MainPage;
