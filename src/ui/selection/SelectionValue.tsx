import * as React from 'react';

const SelectionValue = ({ title, value }: SelectionValueProps) => {
	return (
		<div>
			<span className="selection__title">{title}</span>
			<span>{value}</span>
		</div>
	);
};

export interface SelectionValueProps {
	title: string;
	value?: string;
}

export default SelectionValue;
