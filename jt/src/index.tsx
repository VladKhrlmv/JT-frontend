import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import AnimPage from './components/AnimPage';
import MainPage from './components/MainPage';
import Register from './components/Register';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import Requests from './components/Requests';
import ChatPage from './components/ChatPage';
import CreateChat from './components/CreateChat';
import { store } from './state';
import { Provider } from 'react-redux';
import { useSelector } from './hooks/useSelector';
import './i18n/config';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const App = () => {
	const { role } = useSelector((state) => state.role);

	return (
		<Routes>
			<Route path="/" element={<AnimPage />} />
			{role &&
				(role === 'volunteer' ? (
					<Route path="/v" element={<MainPage />}>
						<Route path="home" element={null} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="chat" element={<ChatPage />}>
							<Route path="new" element={<Requests />}>
								<Route
									path=":requestId"
									element={<CreateChat />}
								/>
							</Route>
						</Route>
						<Route path="account" element={null} />
						<Route path="settings" element={null} />
						<Route path="help" element={null} />
					</Route>
				) : (
					<Route path="/n" element={<MainPage />}>
						<Route path="home" element={null} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="chat" element={null} />
						<Route path="account" element={null} />
						<Route path="settings" element={null} />
						<Route path="help" element={null} />
					</Route>
				))}
			<Route path="*" element={<ErrorPage />} />
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
