import * as React from 'react';

const SelectionChoice = ({
	checked,
	label,
	name,
	onChange,
	value,
}: SelectionChoiceProps) => {
	const id = `${name}-${value}`;

	return (
		<div>
			<input
				type="radio"
				id={id}
				value={value}
				name={name}
				checked={checked}
				onChange={onChange}
			/>
			<label htmlFor={id} className="selection__label">
				{label}
			</label>
		</div>
	);
};

export interface SelectionChoiceProps {
	checked: boolean;
	label: string;
	name: string;
	onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

export default SelectionChoice;
