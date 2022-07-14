import React from 'react';
import styles from '../styles/requests.module.css';
import logo from '../img/globe_white.svg';
import InfoBar from './InfoBar';

// type RequestsPageProps = {
// 	content: {
// 		img: string;
// 		title: string;
// 		subtext: string;
// 		text: string;
// 	}[];
// };

const Requests = (/*{ contents }: RequestsPageProps*/) => {
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className={styles.container}>
			{arr.map((item) => {
				return (
					<InfoBar
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
	);
};

export default Requests;
