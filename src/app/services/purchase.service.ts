import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PurchaseHistory } from '../models/PurchaseHistory.model';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';

const BASE_URL =`${environment.BASE_URL}purchase-history`

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends RequestBaseService{

  constructor(authService: AuthenticationService, http:HttpClient) { 
    super(authService, http);
  }


  savePurChase(purchase:PurchaseHistory):Observable<any>{

     return this.http.post(BASE_URL ,purchase, {headers: this.getHeaders})
  }

  getPurchasItems(id:any):Observable<any>{

    return this.http.get(`${BASE_URL}/${id}`, {headers: this.getHeaders})
  }


}
