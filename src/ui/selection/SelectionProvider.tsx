/**
 * Provider component is allowed to have direct dependency on the services.
 * It passes down actions and state as props.
 *
 * Other components in this folder are considered UI components. They accept dependencies as props only.
 */

import * as React from 'react';
import { CoffeeSize, CoffeeStrength, CoffeeType } from '../../domain';
import { useAppSelector, useAppDispatch } from '../../services/store';
import { usersSelectors } from '../../services/store/users';
import {
	confirmOrder,
	selectionSelectors,
	selectSize,
	selectStrength,
	selectType,
} from '../../services/store/selection';
import { useComponentsContext } from '../components';

const MachineProvider = () => {
	const { Selection } = useComponentsContext();
	const currentUser = useAppSelector(usersSelectors.current);
	const confirmActive = useAppSelector(selectionSelectors.active);
	const currentOrder = useAppSelector(selectionSelectors.current);
	const selectedSize = useAppSelector(selectionSelectors.size);
	const selectedStrength = useAppSelector(selectionSelectors.strength);
	const selectedType = useAppSelector(selectionSelectors.type);
	const status = useAppSelector(selectionSelectors.status);
	const dispatch = useAppDispatch();

	const onSizeSelect = (size: CoffeeSize) => {
		dispatch(selectSize(size));
	};

	const onTypeSelect = (type: CoffeeType) => {
		dispatch(selectType(type));
	};

	const onStrengthSelect = (strength: CoffeeStrength) => {
		dispatch(selectStrength(strength));
	};

	const onConfirm = () => {
		dispatch(confirmOrder());
	};

	return (
		<Selection
			confirmActive={confirmActive}
			currentOrder={currentOrder}
			currentUser={currentUser}
			onConfirm={onConfirm}
			onSizeSelect={onSizeSelect}
			onStrengthSelect={onStrengthSelect}
			onTypeSelect={onTypeSelect}
			selectedSize={selectedSize}
			selectedStrength={selectedStrength}
			selectedType={selectedType}
			status={status}
		/>
	);
};

export default MachineProvider;
