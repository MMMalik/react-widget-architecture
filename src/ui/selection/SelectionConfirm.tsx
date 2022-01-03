import * as React from 'react';

const SelectionConfirm = ({
	confirmActive,
	onConfirm,
}: SelectionConfirmProps) => {
	return (
		<button
			className="selection__btn"
			disabled={!confirmActive}
			onClick={onConfirm}
		>
			confirm
		</button>
	);
};

export interface SelectionConfirmProps {
	confirmActive: boolean;
	onConfirm: () => void;
}

export default SelectionConfirm;
