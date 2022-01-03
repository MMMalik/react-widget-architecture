import { UniqueId } from './common';
import { Order } from './order';
import { User } from './user';

export type CoffeeMachineStatus = 'idle' | 'in-progress';

export interface CoffeeMachine {
	id: UniqueId;
	status: CoffeeMachineStatus;
	currentOrder?: Order;
	currentUser?: User;
	history: Order[];
}

export const canPlaceOrder = (user?: User, status?: CoffeeMachineStatus) => {
	return !!user && status === 'idle';
};
