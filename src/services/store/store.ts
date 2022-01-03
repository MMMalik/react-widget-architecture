/**
 * Entry point to the global store.
 */

import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import { selectionReducer } from './selection';
import { uiReducer } from './ui';
import { usersReducer } from './users';

export const store = configureStore({
	reducer: {
		selection: selectionReducer,
		ui: uiReducer,
		users: usersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
