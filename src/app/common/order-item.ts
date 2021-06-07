
import { CartItem } from './cart-item';

export class OrderItem {
    imageUrl: string;
    unitPrice: number;
    numberOfChildren: number;
    kindergartenId: string;

    constructor(cartItem: CartItem) {
        this.imageUrl = cartItem.imageUrl;
        this.numberOfChildren = cartItem.NumberOfChildren;
        this.unitPrice = cartItem.unitPrice;
        this.kindergartenId = cartItem.id;
    }
}
