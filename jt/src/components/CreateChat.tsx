import React from 'react';
import styles from '../styles/create-chat.module.css';
import { useTranslation } from 'react-i18next';
import logo from '../img/globe_white.svg';
import MessageBubble from './MessageBubble';
import { useNavigate } from 'react-router-dom';

const CreateChat = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	let content = {
		img: logo,
		title: 'Dummy title',
		subtext: 'subtext: dsasdf',
		text: 'content of the info basdfasdf asdf asdf asdf sadf asd fsda fasd fr',
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<header className={styles.info_section}>
					<img
						className={styles.avatar}
						src={content.img}
						alt="avatar"
					/>
					<div>
						<p className={styles.title}>{content.title}</p>
						<p className={styles.subtext}>{content.subtext}</p>
					</div>
				</header>
				<main>
					<MessageBubble
						avatar={logo}
						sender="to"
						text={content.text}
					/>
				</main>
				<footer>
					<button
						onClick={() => {
							navigate(-1);
						}}
						className={styles.go_back_button}
					>
						{t('createchat.go_back')}
					</button>
					<button className={styles.accept_button}>
						{t('createchat.accept')}
					</button>
				</footer>
			</div>
		</div>
	);
};

export default CreateChat;
