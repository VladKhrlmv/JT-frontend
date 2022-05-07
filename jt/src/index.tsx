import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import AnimPage from './components/anim-page';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const App = () => {
	return <AnimPage />;
};

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
