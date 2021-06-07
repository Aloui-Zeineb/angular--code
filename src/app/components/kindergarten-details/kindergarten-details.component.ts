import { Component, OnInit } from '@angular/core';
import { Kindergarten} from 'src/app/common/kindergarten';
import { KindergartenService } from 'src/app/services/kindergarten.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/common/cart-item';
@Component({
  selector: 'app-kindergarten-details',
  templateUrl: './kindergarten-details.component.html',
  styleUrls: ['./kindergarten-details.component.css']
})
export class KindergartenDetailsComponent implements OnInit {
  kindergarten: Kindergarten= new Kindergarten();

  constructor(private kindergartenService: KindergartenService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleKindergartenDetails();
    })
  }
 

  handleKindergartenDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const theKindergartenId: number = +this.route.snapshot.paramMap.get('id');

    this.kindergartenService.getKindergarten(theKindergartenId).subscribe(
      data => {
        this.kindergarten = data;
      }
    )
  }
  addToCart() {

    console.log(`Adding to cart: ${this.kindergarten.name}, ${this.kindergarten.unitPrice}`);
    const theCartItem = new CartItem(this.kindergarten);
    this.cartService.addToCart(theCartItem);
    
  }

}

  


