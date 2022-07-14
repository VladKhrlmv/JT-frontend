import React, { useRef } from 'react';
import styles from '../styles/requests.module.css';
import logo from '../img/globe_white.svg';
import InfoBar from './InfoBar';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

// type RequestsPageProps = {
// 	content: {
// 		img: string;
// 		title: string;
// 		subtext: string;
// 		text: string;
// 	}[];
// };

const Requests = (/*{ contents }: RequestsPageProps*/) => {
	let requestsContainerRef = useRef<HTMLDivElement>(null);

	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<>
			<div ref={requestsContainerRef} className={styles.container}>
				{arr.map((item) => {
					return (
						<InfoBar
							key={item}
							requestsContainer={requestsContainerRef}
							content={{
								img: logo,
								title: 'Dummy title',
								subtext: 'subtext: dsasdf',
								text: 'content of the info bar',
							}}
						/>
					);
				})}
			</div>
			<Outlet />
		</>
	);
};

export default Requests;
