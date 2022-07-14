import React from 'react';
import styles from '../styles/info-bar.module.css';

type InfoBarPageProps = {
	content: {
		img: string;
		title: string;
		subtext: string;
		text: string;
	};
};

const InfoBar = ({ content }: InfoBarPageProps) => {
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
