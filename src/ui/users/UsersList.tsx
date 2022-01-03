import * as React from 'react';
import { User } from '../../domain';

const UsersList = ({ onSelectUser, users }: UsersListProps) => {
	const createUserClickHandler = (id: string) => () => {
		onSelectUser(id);
	};

	return (
		<ul className="users__list">
			{users.map(({ id, name }) => (
				<li key={id} className="users__user">
					<button
						onClick={createUserClickHandler(id)}
						className="users__btn"
					>
						{name}
					</button>
				</li>
			))}
		</ul>
	);
};

export interface UsersListProps {
	onSelectUser: (id: string) => void;
	users: User[];
}

export default UsersList;
