import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { timeout } from '../../../lib';
import {
	canPlaceOrder,
	CoffeeSize,
	CoffeeStrength,
	CoffeeType,
	CoffeeMachineStatus,
	Order,
} from '../../../domain';
import { emitter } from '../emitter';
import { AppThunk, RootState } from '../store';

type SelectionState = {
	id: string;
	current?: Order;
	status: CoffeeMachineStatus;
	history: Order[];
	size: CoffeeSize;
	strength: CoffeeStrength;
	type: CoffeeType;
};

const initialState: SelectionState = {
	id: '1',
	history: [],
	status: 'idle',
	size: 'medium',
	strength: 'medium',
	type: 'espresso',
};

const selectionSlice = createSlice({
	name: 'selection',
	initialState,
	reducers: {
		confirm: (state, action: PayloadAction<Order>) => {
			state.current = action.payload;
		},
		done: (state) => {
			if (state.current) {
				state.history.push(state.current);
				state.current = undefined;
			}
			state.status = 'idle';
		},
		inProgress: (state) => {
			state.status = 'in-progress';
		},
		size: (state, action: PayloadAction<CoffeeSize>) => {
			state.size = action.payload;
		},
		strength: (state, action: PayloadAction<CoffeeStrength>) => {
			state.strength = action.payload;
		},
		type: (state, action: PayloadAction<CoffeeType>) => {
			state.type = action.payload;
		},
	},
});

/**
 * Emitted events.
 */
export type SelectionActionEvents = {
	'selection:confirm': Order;
	'selection:inProgress': Order;
	'selection:done': Order;
	'selection:selectSize': CoffeeSize;
	'selection:selectStrength': CoffeeStrength;
	'selection:selectType': CoffeeType;
};

/**
 * Action creators.
 */
export const confirmOrder = (): AppThunk => async (dispatch, getState) => {
	const { selection, users } = getState();

	if (!users.current) {
		return;
	}

	const order: Order = {
		id: String(Date.now()),
		size: selection.size,
		strength: selection.strength,
		type: selection.type,
		user: users.current,
	};

	emitter.emit('selection:confirm', order);
	dispatch(selectionSlice.actions.confirm(order));

	emitter.emit('selection:inProgress', order);
	dispatch(selectionSlice.actions.inProgress());

	await timeout(1000);

	emitter.emit('selection:done', order);
	dispatch(selectionSlice.actions.done());
};

export const selectSize =
	(size: CoffeeSize): AppThunk =>
	(dispatch) => {
		emitter.emit('selection:selectSize', size);
		dispatch(selectionSlice.actions.size(size));
	};

export const selectStrength =
	(strength: CoffeeStrength): AppThunk =>
	(dispatch) => {
		emitter.emit('selection:selectStrength', strength);
		dispatch(selectionSlice.actions.strength(strength));
	};

export const selectType =
	(type: CoffeeType): AppThunk =>
	(dispatch) => {
		emitter.emit('selection:selectType', type);
		dispatch(selectionSlice.actions.type(type));
	};

/**
 * State selectors.
 */
export const selectionSelectors = {
	active: (state: RootState) => {
		return canPlaceOrder(state.users.current, state.selection.status);
	},
	current: (state: RootState) => state.selection.current,
	size: (state: RootState) => state.selection.size,
	status: (state: RootState) => state.selection.status,
	strength: (state: RootState) => state.selection.strength,
	type: (state: RootState) => state.selection.type,
};

/**
 * Main reducer.
 */
export const selectionReducer = selectionSlice.reducer;
