import '../styles/chat-nav.css';

const NavigationChat = () => {
	return (
		<div className="Interface">
			<img
				src="../../public/icons/PoMOCNO.svg"
				className="title"
				alt="Pomocno"
			/>
			<img
				src="../../public/icons/globe_white.svg"
				alt="globe"
				className="globe"
			/>
			<img
				src="../../public/icons/info_white.svg"
				alt="info"
				className="info"
			/>
			<div className="buttonPosition">
				<a className="new">
					<img
						src="../../public/icons/globe_white.svg"
						alt="new"
						className="new"
					/>
					<span>new</span>
				</a>

				<a className="active">
					<img
						src="../../public/icons/globe_white.svg"
						alt="active"
						className="active"
					/>
					<span>active</span>
				</a>

				<a className="archive">
					<img
						src="../../public/icons/globe_white.svg"
						alt="archive"
						className="archive"
					/>
					<span>archives</span>
				</a>
			</div>
		</div>
	);
};

export default NavigationChat;
