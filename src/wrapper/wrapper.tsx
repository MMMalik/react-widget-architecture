import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { emitter, store } from '../services/store';
import Core, { CoreProps } from '../ui';

export interface WrapperOptions extends CoreProps {
	root: HTMLElement;
}

export default ({ root, ...coreProps }: WrapperOptions) => {
	ReactDOM.render(
		<Provider store={store}>
			<Core {...coreProps} />
		</Provider>,
		root
	);

	return { emitter };
};
