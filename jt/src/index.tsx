import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/index.css';
import AnimPage from './components/AnimPage';
import MainPage from './components/MainPage';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const App = () => {
	return <AnimPage />;
};

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Route path="/" element={<App />}>
				<Route path="home" element={<MainPage />} />
			</Route>
		</BrowserRouter>
	</React.StrictMode>
);
