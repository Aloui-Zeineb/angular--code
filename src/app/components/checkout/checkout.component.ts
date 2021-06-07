import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { KindergartenFormService } from 'src/app/services/kindergarten-form.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/services/checkout.service';

import { Order } from 'src/app/common/order';
import { OrderItem } from 'src/app/common/order-item';
import { Purchase } from 'src/app/common/purchase';
import { Delegation } from 'src/app/common/delegation';
import { State } from 'src/app/common/state';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  totalPrice: number = 0;
  totalNumberOfChildren: number = 0;
  
  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];

  constructor(private formBuilder: FormBuilder,
              private kindergartenFormService: KindergartenFormService,
              private cartService: CartService,
              private checkoutService: CheckoutService,
              private router: Router) { }

  ngOnInit(): void {
    this.reviewCartDetails();
    
    this.checkoutFormGroup = this.formBuilder.group({
      parent: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      childAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        delegation: [''],
        zipCode: ['']
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        delegation: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      })
    });
     // populate credit card months

     const startMonth: number = new Date().getMonth() + 1;
     console.log("startMonth: " + startMonth);
 
     this.kindergartenFormService.getCreditCardMonths(startMonth).subscribe(
       data => {
         console.log("Retrieved credit card months: " + JSON.stringify(data));
         this.creditCardMonths = data;
       }
     );
 
     // populate credit card years
 
     this.kindergartenFormService.getCreditCardYears().subscribe(
       data => {
         console.log("Retrieved credit card years: " + JSON.stringify(data));
         this.creditCardYears = data;
       }
     );
  }
  reviewCartDetails() {
    // subscribe to cartService.totalNumberOfChildren
    this.cartService.totalNumberOfChildren.subscribe(
      totalNumberOfChildren => this.totalNumberOfChildren = totalNumberOfChildren
    );

    // subscribe to cartService.totalPrice
    this.cartService.totalPrice.subscribe(
      totalPrice => this.totalPrice = totalPrice
    );
  }

  copychildAddressToBillingAddress(event) {

    if (event.target.checked) {
      this.checkoutFormGroup.controls.billingAddress
            .setValue(this.checkoutFormGroup.controls.childAddress.value);
    }
    else {
      this.checkoutFormGroup.controls.billingAddress.reset();
    }
    
  }

  onSubmit() {
    console.log("Handling the submit button");

    if (this.checkoutFormGroup.invalid) {
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }

    // set up order
    let order = new Order();
    order.totalPrice = this.totalPrice;
    order.totalNumberOfChildren = this.totalNumberOfChildren;

    // get cart items
    const cartItems = this.cartService.cartItems;

    // create orderItems from cartItems
    // - long way
    /*
    let orderItems: OrderItem[] = [];
    for (let i=0; i < cartItems.length; i++) {
      orderItems[i] = new OrderItem(cartItems[i]);
    }
    */

    // - short way of doing the same thingy
    let orderItems: OrderItem[] = cartItems.map(tempCartItem => new OrderItem(tempCartItem));

    // set up purchase
    let purchase = new Purchase();
    
    // populate purchase - parent
    purchase.parent = this.checkoutFormGroup.controls['parent'].value;
    
    // populate purchase - child address
    purchase.childAddress = this.checkoutFormGroup.controls['childAddress'].value;
    const childState: State = JSON.parse(JSON.stringify(purchase.childAddress.state));
    const childDelegation: Delegation = JSON.parse(JSON.stringify(purchase.childAddress.delegation));
    purchase.childAddress.state = childState.name;
    purchase.childAddress.delegation = childDelegation.name;

    // populate purchase - billing address
    purchase.billingAddress = this.checkoutFormGroup.controls['billingAddress'].value;
    const billingState: State = JSON.parse(JSON.stringify(purchase.billingAddress.state));
    const billingDelegation: Delegation = JSON.parse(JSON.stringify(purchase.billingAddress.delegation));
    purchase.billingAddress.state = billingState.name;
    purchase.billingAddress.delegation = billingDelegation.name;
  
    // populate purchase - order and orderItems
    purchase.order = order;
    purchase.orderItems = orderItems;

    // call REST API via the CheckoutService
    this.checkoutService.placeOrder(purchase).subscribe({
        next: response => {
          alert(`Your order has been received.\nOrder tracking number: ${response.orderTrackingNumber}`);

          // reset cart
          this.resetCart();

        },
        error: err => {
          alert(`There was an error: ${err.message}`);
        }
      }
    );

  }

  resetCart() {
    // reset cart data
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalNumberOfChildren.next(0);
    
    // reset the form
    this.checkoutFormGroup.reset();

    // navigate back to the kindergartens page
    this.router.navigateByUrl("/kindergartens");
  }
  

}