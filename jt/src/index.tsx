import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import AnimPage from './components/AnimPage';
import MainPage from './components/MainPage';
import Register from './components/Register';
import { store } from './state';
import { Provider } from 'react-redux';
import './i18n/config';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<AnimPage />} />
			<Route path="home" element={<MainPage />} />
			<Route path="home" element={<MainPage />} />
			<Route
				path="register"
				element={
					<MainPage>
						<Register />
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
