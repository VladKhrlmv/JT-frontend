import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import AnimPage from './components/AnimPage';
import NavigationChat from './components/Navigation-Chat';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const App = () => {
	return <><NavigationChat /></>;
};

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
