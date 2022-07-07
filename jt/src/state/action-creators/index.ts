import { Dispatch } from 'redux';
import { RoleActionTypes } from '../action-types';
import { RoleAction } from '../actions';

import { Role } from '../reducers/roleReducer';

export const setRole = (role: Role) => {
	return (dispatch: Dispatch<RoleAction>): void => {
		dispatch({ type: RoleActionTypes.ROLE_SET, payload: role });
	};
};
