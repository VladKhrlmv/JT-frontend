import React from 'react';
import styles from '../styles/info-bar.module.css';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

type InfoBarPageProps = {
	requestsContainer: React.RefObject<HTMLDivElement>;
	content: {
		img: string;
		title: string;
		subtext: string;
		text: string;
	};
};

const InfoBar = ({ requestsContainer, content }: InfoBarPageProps) => {
	// let onClick = () => {
	// 	requestsContainer.current &&
	// 		requestsContainer.current.classList.add('hidden');
	// };
	const navigate = useNavigate();

	let onClick = () => {
		let id = 'dummy-id';
		navigate(`/v/chat/new/${id}`);
	};

	return (
		<div onClick={onClick} className={styles.container}>
			<div className={styles.info_section}>
				<img className={styles.avatar} src={content.img} alt="avatar" />
				<div>
					<p className={styles.title}>{content.title}</p>
					<p className={styles.subtext}>{content.subtext}</p>
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>{content.text}</p>
			</div>
		</div>
	);
};

export default InfoBar;
