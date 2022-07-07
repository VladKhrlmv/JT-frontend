import { RoleActionTypes } from '../action-types';
import { RoleAction } from '../actions';

export type Role = 'volunteer' | 'need' | null;

interface RoleState {
	role: Role;
}

const initialState: RoleState = {
	role: null,
};

const RoleReducer = (
	state: RoleState = initialState,
	action: RoleAction
): RoleState => {
	switch (action.type) {
		case RoleActionTypes.ROLE_SET:
			return { role: action.payload };

		default:
			return state;
	}
};

export default RoleReducer;
