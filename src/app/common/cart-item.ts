import { Kindergarten } from './kindergarten';

export class CartItem {
    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;

    NumberOfChildren: number;

    constructor(kindergarten: Kindergarten) {
        this.id = kindergarten.id;
        this.name = kindergarten.name;
        this.imageUrl = kindergarten.imageUrl;
        this.unitPrice = kindergarten.unitPrice;

        this.NumberOfChildren = 1;
    }
}
