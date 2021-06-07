import { Address } from './address';
import { Parent } from './parent';
import { Order } from './order';
import { OrderItem } from './order-item';

export class Purchase {
    parent: Parent;
    childAddress: Address;
    billingAddress: Address;
    order: Order;
    orderItems: OrderItem[]; 
}