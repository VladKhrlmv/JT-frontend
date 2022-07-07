import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const saveToLocalStorage = (state: RootState) => {
	try {
		localStorage.setItem('state', JSON.stringify(state));
	} catch (e) {
		console.error(e);
	}
};

const loadFromLocalStorage = () => {
	try {
		const stateStr = localStorage.getItem('state');
		return stateStr ? JSON.parse(stateStr) : undefined;
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

const persistedStore = loadFromLocalStorage();

export const store = configureStore({
	reducer,
	preloadedState: persistedStore,
});

store.subscribe(() => {
	saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
