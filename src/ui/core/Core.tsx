/**
 * Core component is an entry point to the widget.
 *
 * For convenience, events can be listened to via callback props such as `onViewChange`.
 * Other events are omitted for brevity.
 */

import * as React from 'react';
import { emitter } from '../../services/store';
import { UIView } from '../../services/store/ui';
import {
	Components,
	ComponentsContext,
	defaultComponents,
} from '../components';
import View from '../view';

const Core = ({ components, onViewChange }: CoreProps) => {
	React.useEffect(() => {
		if (!onViewChange) {
			return;
		}

		emitter.on('ui:view', onViewChange);

		return () => {
			emitter.off('ui:view', onViewChange);
		};
	}, [onViewChange]);

	return (
		<ComponentsContext.Provider
			value={{ ...defaultComponents, ...components }}
		>
			<View />
		</ComponentsContext.Provider>
	);
};

export interface CoreProps {
	components?: Partial<Components>;
	onViewChange?: (view: UIView) => void;
}

export default Core;
