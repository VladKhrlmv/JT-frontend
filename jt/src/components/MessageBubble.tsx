import React from 'react';
import styles from '../styles/message-bubble.module.css';

type MainPageProps = {
	avatar?: string;
	sender: string;
	text: string;
};

const MessageBubble = ({ avatar, sender, text }: MainPageProps) => {
	return (
		<div
			style={{
				justifyContent: sender === 'to' ? 'flex-start' : 'flex-end',
			}}
			className={`${styles.container}`}
		>
			{avatar && (
				<img className={styles.avatar} src={avatar} alt="avatar" />
			)}
			<p className={styles.bubble}>{text}</p>
		</div>
	);
};

export default MessageBubble;
