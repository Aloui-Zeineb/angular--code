import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs/index";

import { Par } from '../common/par';

@Injectable({
  providedIn: 'root'
})
export class ParService {
 [x: string]: any;

  private baseUrl = 'http://localhost:8087/api/pars';

  constructor(private http: HttpClient) { }

 //login(loginPayload) : Observable<ParService> {
   // return this.http.post<ParService>('http://localhost:8087/' + 'token/generate-token', loginPayload);
  //}
  //getEmployeesList(): Observable<any> {
    //return this.http.get(`${this.baseUrl}`);
  //}

 // getParsL() : Observable<any> {
    getPars() : Observable<any> {
   return this.http.get<any>(this.baseUrl);
   //return this.http.get(`${this.baseUrl}`);
}

//getEvents(): Observable<IEvent[]>
  //{
    //this.url = 'http://localhost:9091/events/';
   // return this.http.get<IEvent[]>(this.url);
 // }


  getParById(id: number): Observable<ParService> {
    return this.http.get<ParService>(this.baseUrl + id);
  }

  createPar(par: Par): Observable<ParService> {
    return this.http.post<ParService>(this.baseUrl, par);
  }

  updatePar(par: Par): Observable<ParService> {
    return this.http.put<ParService>(this.baseUrl + par.id, par);
  }

  deletePar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
  //deleteEmployee(id: number): Observable<any> {
    //return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  //}
}
