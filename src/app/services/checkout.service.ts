
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../common/purchase';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private purchaseUrl = 'http://localhost:8087/api/checkout/subscriptions';

  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any> {
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);    
  }
  getPurchase(id: number): Observable<any> {
    return this.httpClient.get(`${this.purchaseUrl}/${id}`);
  }

  createPurchase(purchase: Object): Observable<Object> {
    return this.httpClient.post(`${this.purchaseUrl}`, purchase);
  }

  updatePurchase(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.purchaseUrl}/${id}`, value);
  }

  deletePurchase(id: number): Observable<any> {
    return this.httpClient.delete(`${this.purchaseUrl}/${id}`, { responseType: 'text' });
  }

  getPurchasesList(): Observable<any> {
    return this.httpClient.get(`${this.purchaseUrl}`);
  }
  
}
