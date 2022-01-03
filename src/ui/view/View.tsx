/**
 * A special component that renders selected view.
 */

import * as React from 'react';
import { useAppDispatch } from '../../services/store';
import { useAppSelector } from '../../services/store';
import { uiSelectors, mounted, unmounted } from '../../services/store/ui';
import SelectionProvider from '../selection';
import UsersProvider from '../users';

const View = () => {
	const view = useAppSelector(uiSelectors.view);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(mounted());
		return () => {
			dispatch(unmounted());
		};
	}, [dispatch]);

	const getView = () => {
		switch (view) {
			case 'users':
				return <UsersProvider />;
			case 'selection':
				return <SelectionProvider />;
			default:
				return null;
		}
	};

	return (
		<div className="view">
			<div className="view__content">{getView()}</div>
		</div>
	);
};

export default View;
