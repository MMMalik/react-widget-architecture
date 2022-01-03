import * as React from 'react';
import { User } from '../../domain';
import { useComponentsContext } from '../components';

const Users = ({ users, loading, onSelectUser }: UsersProps) => {
	const { UsersLoading, UsersList } = useComponentsContext();

	return (
		<div className="users">
			{loading ? (
				<UsersLoading />
			) : (
				<UsersList users={users} onSelectUser={onSelectUser} />
			)}
		</div>
	);
};

export interface UsersProps {
	loading: boolean;
	onSelectUser: (id: string) => void;
	users: User[];
}

export default Users;
