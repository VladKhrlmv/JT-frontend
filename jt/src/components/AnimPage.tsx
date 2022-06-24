import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/anim-page.module.css';
import { useActions } from '../hooks/useActions';

const AnimPage = () => {
	const need = useRef<HTMLDivElement>(null);
	const want = useRef<HTMLDivElement>(null);
	const { setRole } = useActions();

	const changeShape = (
		ref: React.RefObject<HTMLDivElement>,
		coordinates: string
	) => {
		if (ref.current) ref.current.style.clipPath = `polygon(${coordinates})`;
	};

	return (
		<div className={styles.choose_animation}>
			<Link to="/home">
				<div
					ref={need}
					className={styles.need}
					onMouseOver={() => {
						changeShape(need, '0 0, 0 112%, 112% 0');
						changeShape(want, '0 112%, 112% 0, 100% 100%');
					}}
					onMouseOut={() => {
						changeShape(need, '0 0, 0 100%, 100% 0');
						changeShape(want, '0 100%, 100% 0, 100% 100%');
					}}
					onClick={() => {
						setRole('need');
					}}
				>
					<span>I need help</span>
				</div>
			</Link>
			<Link to="/home">
				<div
					ref={want}
					className={styles.want}
					onMouseOver={() => {
						changeShape(want, '-12% 100%, 100% -12%, 100% 100%');
						changeShape(need, '0 0, -12% 100%, 100% -12%');
					}}
					onMouseOut={() => {
						changeShape(want, '0 100%, 100% 0, 100% 100%');
						changeShape(need, '0 0, 0 100%, 100% 0');
					}}
					onClick={() => {
						setRole('volunteer');
					}}
				>
					<span>I want to help</span>
				</div>
			</Link>
		</div>
	);
};

export default AnimPage;
