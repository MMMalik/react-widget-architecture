/* eslint-disable no-console */

import init from 'react-widget-architecture/dist/wrapper';
import 'react-widget-architecture/dist/ui/index.css';

const root = document.querySelector<HTMLDivElement>('#app');

if (root) {
	const { emitter } = init({
		root,
		onViewChange: () => {
			console.log('Hello from `onViewChange` callback!');
		},
	});

	emitter.on('*', (type, payload) => {
		console.log({ type, payload });
	});
}
