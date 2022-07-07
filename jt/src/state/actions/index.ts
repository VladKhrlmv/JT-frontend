import { RoleActionTypes } from '../action-types';
import { Role } from '../reducers/roleReducer';

interface RoleSetAction {
	type: RoleActionTypes.ROLE_SET;
	payload: Role;
}

export type RoleAction = RoleSetAction;
