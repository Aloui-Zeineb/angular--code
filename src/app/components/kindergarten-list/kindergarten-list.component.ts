import { Component, OnInit } from '@angular/core';
import { KindergartenService } from 'src/app/services/kindergarten.service';
import { Kindergarten } from 'src/app/common/kindergarten';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-kindergarten-list',
  templateUrl: './kindergarten-list-grid.component.html',
  styleUrls: ['./kindergarten-list.component.css']
})
export class KindergartenListComponent implements OnInit {
  kindergartens: Kindergarten[];
  currentCategoryId: number;
  
  

  constructor(private kindergartenService: KindergartenService, 
    private cartService: CartService,
    private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listKindergartens();
  
    });
  }


  listKindergartens() {
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    }
    else {
      // not category id available ... default to category id 1
      this.currentCategoryId = 1;
    }

    this.kindergartenService.getKindergartenList(this.currentCategoryId).subscribe(
      data => {
        this.kindergartens = data;
      }
    )
  }
  addToCart(theKindergarten: Kindergarten) {
    
    console.log(`Adding to cart: ${theKindergarten.name}, ${theKindergarten.unitPrice}`);

    // TODO ... do the real work
    
    const theCartItem = new CartItem(theKindergarten);

    this.cartService.addToCart(theCartItem);

  }

  
  
  
  }



  
  


  

  