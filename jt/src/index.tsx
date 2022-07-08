import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import AnimPage from './components/AnimPage';
import MainPage from './components/MainPage';
import { store } from './state';
import { Provider } from 'react-redux';
import './i18n/config';
import Login from './components/Login';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<AnimPage />} />
			<Route path="home" element={<MainPage />} />
			<Route
				path="login"
				element={
					<MainPage>
						<Login />
					</MainPage>
				}
			/>
		</Routes>
	);
};

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
