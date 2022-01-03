import { CoffeeSize, CoffeeStrength, CoffeeType } from './coffee';
import { UniqueId } from './common';
import { Order } from './order';

export type UserName = string;

export interface UserPreference {
    type: CoffeeType;
    size: CoffeeSize;
    strength: CoffeeStrength;
}

export interface User {
    id: UniqueId;
    name: UserName;
    preference?: UserPreference;
    history: Order[];
}
