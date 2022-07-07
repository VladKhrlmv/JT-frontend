import RoleReducer from './roleReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
	role: RoleReducer,
});

export default reducers;
