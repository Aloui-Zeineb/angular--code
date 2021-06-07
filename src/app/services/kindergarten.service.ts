
 
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Kindergarten } from '../common/kindergarten';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { KindergartenCategory } from '../common/kindergarten-category';
  
  @Injectable({
    providedIn: 'root'
  })
  export class KindergartenService {
    getKindergartenCategories() : Observable<KindergartenCategory[]> {

      return this.httpClient.get<GetResponseKindergartenCategory>(this.categoryUrl).pipe(
        map(response => response._embedded.kindergartenCategory)
      );
    }
      
    
   
  
    private baseUrl = 'http://localhost:8087/api/kindergartens';

    private categoryUrl = 'http://localhost:8087/api/kindergarten-category';
  
    constructor(private httpClient: HttpClient) { }

    getKindergarten(theKindergartenId: number) : Observable<Kindergarten> {
      // need to build URL based on Kindergarten id
    const kindergartenUrl = `${this.baseUrl}/${theKindergartenId}`;

    return this.httpClient.get<Kindergarten>(kindergartenUrl);
    }
    
    
  
    getKindergartenList(theCategoryId: number): Observable<Kindergarten[]> {
  // need to build URL based on category id 
      const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

      return this.httpClient.get<GetResponse>(searchUrl).pipe(
        map(response => response._embedded.kindergartens)
      );
    }
  }
  
  interface GetResponse {
    _embedded: {
      kindergartens: Kindergarten[];
    }
  }
  interface GetResponseKindergartenCategory {
    _embedded: {
      kindergartenCategory: KindergartenCategory[];
    }
  }