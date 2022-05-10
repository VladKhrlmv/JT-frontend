import { useRef } from 'react';
import '../styles/anim-page.css';

const AnimPage = () => {
	const need = useRef<HTMLDivElement>(null);
	const want = useRef<HTMLDivElement>(null);

	const changeShape = (
		ref: React.RefObject<HTMLDivElement>,
		coordinates: string
	) => {
		if (ref.current) ref.current.style.clipPath = `polygon(${coordinates})`;
	};

	return (
		<div className="choose-animation">
			<div
				ref={need}
				className="need"
				onMouseOver={() => {
					changeShape(need, '0 0, 0 112%, 112% 0');
					changeShape(want, '0 112%, 112% 0, 100% 100%');
				}}
				onMouseOut={() => {
					changeShape(need, '0 0, 0 100%, 100% 0');
					changeShape(want, '0 100%, 100% 0, 100% 100%');
				}}
			>
				<span>I need help</span>
			</div>
			<div
				ref={want}
				className="want"
				onMouseOver={() => {
					changeShape(want, '-12% 100%, 100% -12%, 100% 100%');
					changeShape(need, '0 0, -12% 100%, 100% -12%');
				}}
				onMouseOut={() => {
					changeShape(want, '0 100%, 100% 0, 100% 100%');
					changeShape(need, '0 0, 0 100%, 100% 0');
				}}
			>
				<span>I want to help</span>
			</div>
		</div>
	);
};

export default AnimPage;
