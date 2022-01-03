import { CoffeeSize, CoffeeStrength, CoffeeType } from './coffee';
import { UniqueId } from './common';
import { User } from './user';

export interface Order {
    id: UniqueId;
    type: CoffeeType;
    size: CoffeeSize;
    strength: CoffeeStrength;
	user: User;
}
