/**
 * Provider component is allowed to have direct dependency on the services.
 * It passes down actions and state as props.
 *
 * Other components in this folder are considered UI components. They accept dependencies as props only.
 */

import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../services/store';
import {
	selectUser,
	usersSelectors,
	loadUsers,
} from '../../services/store/users';
import { useComponentsContext } from '../components';

const UsersProvider = () => {
	const { Users } = useComponentsContext();
	const users = useAppSelector(usersSelectors.users);
	const loading = useAppSelector(usersSelectors.loading);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(loadUsers());
	}, [dispatch]);

	const onSelectUser = (id: string) => {
		dispatch(selectUser(id));
	};

	return (
		<Users users={users} loading={loading} onSelectUser={onSelectUser} />
	);
};

export default UsersProvider;
