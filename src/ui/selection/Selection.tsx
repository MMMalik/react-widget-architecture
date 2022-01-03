import * as React from 'react';
import {
	CoffeeMachineStatus,
	CoffeeSize,
	CoffeeStrength,
	CoffeeType,
	Order,
	User,
} from '../../domain';
import { useComponentsContext } from '../components';

const Selection = ({
	confirmActive,
	currentUser,
	onConfirm,
	onSizeSelect,
	onStrengthSelect,
	onTypeSelect,
	selectedSize,
	selectedStrength,
	selectedType,
	status,
}: Props) => {
	const { SelectionChoice, SelectionConfirm, SelectionValue } =
		useComponentsContext();

	const onSizeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const value = evt.currentTarget.value as CoffeeSize;
		onSizeSelect(value);
	};

	const onTypeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const value = evt.currentTarget.value as CoffeeType;
		onTypeSelect(value);
	};

	const onStrengthChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const value = evt.currentTarget.value as CoffeeStrength;
		onStrengthSelect(value);
	};

	return (
		<div className="selection">
			<div>
				<div className="selection__section">
					<SelectionValue
						title="Current user"
						value={currentUser?.name}
					/>
				</div>
				<div className="selection__section">
					<div className="selection__title">Select coffee size</div>
					<SelectionChoice
						checked={selectedSize === 'small'}
						label="small"
						name="size"
						value="small"
						onChange={onSizeChange}
					/>
					<SelectionChoice
						checked={selectedSize === 'medium'}
						label="medium"
						name="size"
						value="medium"
						onChange={onSizeChange}
					/>
					<SelectionChoice
						checked={selectedSize === 'large'}
						label="large"
						name="size"
						value="large"
						onChange={onSizeChange}
					/>
				</div>
				<div className="selection__section">
					<div className="selection__title">Select coffee type</div>
					<SelectionChoice
						checked={selectedType === 'cappuccino'}
						label="cappuccino"
						name="type"
						value="cappuccino"
						onChange={onTypeChange}
					/>
					<SelectionChoice
						checked={selectedType === 'espresso'}
						label="espresso"
						name="type"
						value="espresso"
						onChange={onTypeChange}
					/>
					<SelectionChoice
						checked={selectedType === 'latte'}
						label="latte"
						name="type"
						value="latte"
						onChange={onTypeChange}
					/>
				</div>
				<div className="selection__section">
					<div className="selection__title">
						Select coffee strength
					</div>
					<SelectionChoice
						checked={selectedStrength === 'medium'}
						label="medium"
						name="strength"
						value="medium"
						onChange={onStrengthChange}
					/>
					<SelectionChoice
						checked={selectedStrength === 'strong'}
						label="strong"
						name="strength"
						value="strong"
						onChange={onStrengthChange}
					/>
				</div>
				<div className="selection__section">
					<SelectionValue title="Status" value={status} />
				</div>
				<div className="selection__section">
					<SelectionConfirm
						confirmActive={confirmActive}
						onConfirm={onConfirm}
					/>
				</div>
			</div>
		</div>
	);
};

export interface Props {
	confirmActive: boolean;
	currentOrder?: Order;
	currentUser?: User;
	onConfirm: () => void;
	onSizeSelect: (size: CoffeeSize) => void;
	onStrengthSelect: (strength: CoffeeStrength) => void;
	onTypeSelect: (type: CoffeeType) => void;
	selectedSize: CoffeeSize;
	selectedType: CoffeeType;
	selectedStrength: CoffeeStrength;
	status: CoffeeMachineStatus;
}

export default Selection;
