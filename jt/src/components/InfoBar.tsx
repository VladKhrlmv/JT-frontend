import React, { useEffect } from 'react';
import styles from '../styles/info-bar.module.css';
import { useSelector } from '../hooks/useSelector';

type InfoBarPageProps = {
	content: {
		img: string;
		title: string;
		subtext: string;
		text: string;
	};
};

const InfoBar = ({ content }: InfoBarPageProps) => {
	const { role } = useSelector((state) => state.role);
	let bg_color: string = role === 'volunteer' ? '#6c969d' : '#99d5c9';

	return (
		<>
			<div className={styles.container}>
				<div className={styles.info_section}>
					<img
						className={styles.avatar}
						src={content.img}
						alt="avatar"
					/>
					<div>
						<p className={styles.title}>{content.title}</p>
						<p className={styles.subtext}>{content.subtext}</p>
					</div>
				</div>
				<div className={styles.content}>
					<p className={styles.text}>{content.text}</p>
				</div>
			</div>
		</>
	);
};

export default InfoBar;
