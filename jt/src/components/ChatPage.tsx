import React, { useEffect } from 'react';
import ChatNav from './ChatNav';
import styles from '../styles/chat-page.module.css';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const ChatPage = () => {
	const navigate = useNavigate();
	let location = useLocation();
	useEffect(() => {
		if (
			location.pathname === '/n/chat' ||
			location.pathname === '/n/chat'
		) {
			navigate('/n/chat/new');
		}
		if (
			location.pathname === '/v/chat' ||
			location.pathname === '/v/chat'
		) {
			navigate('/v/chat/new');
		}
	}, [location.pathname]);

	return (
		<>
			<ChatNav />
			<div className={styles.wrapper}>
				<Outlet />
			</div>
		</>
	);
};

export default ChatPage;
