/* eslint-disable no-console */

import init from 'react-widget-architecture/dist/wrapper';
import 'react-widget-architecture/dist/ui/index.css';
import CustomUsersList from './CustomUsersList';

const root = document.querySelector<HTMLDivElement>('#app');

if (root) {
	const { emitter } = init({
		root,
		components: { UsersList: CustomUsersList },
	});

	emitter.on('*', (type, payload) => {
		console.log({ type, payload });
	});
}
