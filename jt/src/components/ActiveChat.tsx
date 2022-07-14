import React, { useState } from 'react';
import { useSelector } from '../hooks/useSelector';
import styles from '../styles/active-chat.module.css';
import { useTranslation } from 'react-i18next';
import logo from '../img/globe_white.svg';
import MessageBubble from './MessageBubble';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const ActiveChat = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const { role } = useSelector((state) => state.role);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [container, setContainer] = useState<null | HTMLElement>(null);
	const [input, setInput] = useState('');

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
		setContainer(event.currentTarget.parentElement);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const message = e.target.value;
		setInput(message);
	};

	let content = {
		img: logo,
		title: 'Dummy title',
		subtext: 'subtext: dsasdf',
		text: 'content of the info basdfasdf asdf asdf asdf sadf asd fsda fasd fr',
	};

	return (
		<div className={styles.container}>
			<header className={styles.info_section}>
				<div className={styles.info_container}>
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
				<button className={styles.menu_button} onClick={handleClick}>
					<ListRoundedIcon
						className={styles.menu_button_icon}
						fontSize="large"
					/>
				</button>
				<Menu
					className={styles.menu}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 20,
						horizontal: 'right',
					}}
					container={container}
					open={Boolean(anchorEl)}
					onClose={handleClose}
					elevation={0}
				>
					<MenuItem
						className={styles.cant_help}
						onClick={handleClose}
					>
						{role === 'volunteer'
							? t('chatmenu.cant_help')
							: t('chatmenu.done')}
					</MenuItem>
					<MenuItem className={styles.report} onClick={handleClose}>
						{t('chatmenu.report')}
					</MenuItem>
				</Menu>
			</header>
			<main>
				<MessageBubble avatar={logo} sender="to" text={content.text} />
			</main>
			<footer>
				<textarea
					className={styles.message_input}
					placeholder={t('chat.message_input_placeholder')}
					value={input}
					onChange={onInputChange}
				></textarea>
				<button className={styles.send_button}>
					<SendRoundedIcon fontSize="large" />
				</button>
			</footer>
		</div>
	);
};

export default ActiveChat;
