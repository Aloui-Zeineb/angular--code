import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalNumberOfChildren: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {

    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalNumberOfChildren
    this.cartService.totalNumberOfChildren.subscribe( 
      data => this.totalNumberOfChildren = data
    );

    // compute cart total price and NumberOfChildren
    this.cartService.computeCartTotals();
  }

  incrementNumberOfChildren(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }
  decrementNumberOfChildren(theCartItem: CartItem) {
    this.cartService.decrementNumberOfChildren(theCartItem);
  }
  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }

}
