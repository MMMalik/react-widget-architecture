import * as React from 'react';
import { UsersListProps } from 'react-widget-architecture/dist/ui/users';

const CustomUsersList = ({ users, onSelectUser }: UsersListProps) => {
	return (
		<div>
			{users.map((user) => (
				<button key={user.id} onClick={() => onSelectUser(user.id)}>
					{`Name: ${user.name}`}
				</button>
			))}
		</div>
	);
};

export default CustomUsersList;
