import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../domain';
import { timeout } from '../../../lib';
import { emitter } from '../emitter';
import { AppThunk, RootState } from '../store';
import { changeView } from '../ui';

type UsersState = {
	current?: User;
	loading: boolean;
	users: User[];
};

const initialState: UsersState = {
	current: undefined,
	loading: false,
	users: [],
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		loadOn: (state) => {
			state.loading = true;
		},
		loadOff: (state) => {
			state.loading = false;
		},
		replace: (state, action: PayloadAction<User[]>) => {
			state.users = action.payload;
		},
		select: (state, action: PayloadAction<User | undefined>) => {
			state.current = action.payload;
		},
	},
});

/**
 * Emitted events.
 */
export type UserActionEvents = {
	'users:load': User[];
	'users:select': User | undefined;
};

/**
 * Action creators.
 */
export const loadUsers = (): AppThunk => async (dispatch) => {
	dispatch(usersSlice.actions.loadOn());

	await timeout(1000);

	const users = [
		{ id: '1', name: 'Joe Doe', history: [] },
		{ id: '2', name: 'Jane Doe', history: [] },
		{ id: '3', name: 'Foo Bar', history: [] },
	];

	emitter.emit('users:load', users);

	dispatch(usersSlice.actions.replace(users));
	dispatch(usersSlice.actions.loadOff());
};

export const selectUser =
	(id: string): AppThunk =>
	(dispatch, getState) => {
		const user = getState().users.users.find((u) => u.id === id);

		emitter.emit('users:select', user);

		dispatch(usersSlice.actions.select(user));
		dispatch(changeView('selection'));
	};

/**
 * State selectors.
 */
export const usersSelectors = {
	current: (state: RootState) => state.users.current,
	loading: (state: RootState) => state.users.loading,
	users: (state: RootState) => state.users.users,
};

/**
 * Main reducer.
 */
export const usersReducer = usersSlice.reducer;
