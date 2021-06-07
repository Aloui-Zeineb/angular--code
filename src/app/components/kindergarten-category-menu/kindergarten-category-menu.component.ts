import { Component, OnInit } from '@angular/core';
import { KindergartenCategory } from 'src/app/common/kindergarten-category';
import { KindergartenService } from 'src/app/services/kindergarten.service';

@Component({
  selector: 'app-kindergarten-category-menu',
  templateUrl: './kindergarten-category-menu.component.html',
  styleUrls: ['./kindergarten-category-menu.component.css']
})
export class KindergartenCategoryMenuComponent implements OnInit {

  kindergartenCategories: KindergartenCategory[];
  
  constructor(private kindergartenService: KindergartenService) { }

  ngOnInit() {
    this.listKindergartenCategories();
  }

  listKindergartenCategories() {

    this.kindergartenService.getKindergartenCategories().subscribe(
      data => {
        console.log('Kindergarten Categories=' + JSON.stringify(data));
        this.kindergartenCategories = data;
      }
    );
  }

}
