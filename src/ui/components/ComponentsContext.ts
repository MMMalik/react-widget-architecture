/**
 * Acts as components registry.
 * Each UI component except for providers can be overriden.
 */

import * as React from 'react';
import * as SelectionComponents from '../selection';
import * as UserComponents from '../users';

export const defaultComponents = {
	...SelectionComponents,
	...UserComponents,
};

export type Components = typeof defaultComponents;

export const ComponentsContext = React.createContext<Components>(defaultComponents);

export const useComponentsContext = () => {
	return React.useContext(ComponentsContext);
};
