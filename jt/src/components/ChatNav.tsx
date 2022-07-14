import React from 'react';
import styles from '../styles/chat-nav.module.css';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useSelector } from '../hooks/useSelector';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SvgIcon from '@mui/material/SvgIcon';

const ChatNav = () => {
	const { t } = useTranslation();
	const { role } = useSelector((state) => state.role);
	const role_route = role === 'volunteer' ? 'v' : 'n';

	const chatnav_items = {
		new: CommentOutlinedIcon,
		active: MailOutlineRoundedIcon,
		archive: Inventory2OutlinedIcon,
	};

	return (
		<div className={styles.chatnav}>
			{Object.entries(chatnav_items).map((item) => {
				return (
					<nav key={item[0]} className={styles.chatnav_item}>
						<NavLink
							style={({ isActive }) => {
								return {
									boxShadow: isActive
										? '7px 7px 1px #00000029'
										: '',
									backgroundColor: isActive
										? 'var(--secondary-color)'
										: '',
								};
							}}
							to={`/${role_route}/chat/${item[0]}`}
						>
							<>
								<SvgIcon
									className={styles.icon}
									component={item[1]}
									fontSize="large"
								/>
								{t(`chatnav.${item[0]}`)}
							</>
						</NavLink>
					</nav>
				);
			})}
		</div>
	);
};

export default ChatNav;
