import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="home" element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
