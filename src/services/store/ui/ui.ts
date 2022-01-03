import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { emitter } from '../emitter';
import { AppThunk, RootState } from '../store';

export type UIView = 'users' | 'selection';

type UIState = {
	mounted: boolean;
	view: UIView;
};

const initialState: UIState = { mounted: false, view: 'users' };

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		mounted: (state) => {
			state.mounted = true;
		},
		unmounted: (state) => {
			state.mounted = false;
		},
		view: (state, action: PayloadAction<UIView>) => {
			state.view = action.payload;
		},
	},
});

/**
 * Emitted events.
 */
export type UIActionEvents = {
	'ui:mounted': void;
	'ui:unmounted': void;
	'ui:view': UIView;
};

/**
 * Action creators.
 */
export const mounted = (): AppThunk => (dispatch) => {
	emitter.emit('ui:mounted');
	dispatch(uiSlice.actions.mounted());
};

export const unmounted = (): AppThunk => (dispatch) => {
	emitter.emit('ui:unmounted');
	dispatch(uiSlice.actions.unmounted());
};

export const changeView =
	(view: UIView): AppThunk =>
	(dispatch) => {
		emitter.emit('ui:view', view);
		dispatch(uiSlice.actions.view(view));
	};

/**
 * State selectors.
 */
export const uiSelectors = {
	mounted: (state: RootState) => state.ui.mounted,
	view: (state: RootState) => state.ui.view,
};

/**
 * Main reducer.
 */
export const uiReducer = uiSlice.reducer;
