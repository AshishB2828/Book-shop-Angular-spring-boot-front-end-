import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export abstract class RequestBaseService {

  protected currentLoggedInUser:User =new User();
  constructor(protected authService:AuthenticationService, protected http:HttpClient) { 
    this.authService.currentUser.subscribe(
      data=> this.currentLoggedInUser =data
    )
  }


  get getHeaders():HttpHeaders {

    return new HttpHeaders(
      {
        authorization:'Bearer '+ this.currentLoggedInUser?.token,
        "Content-Type": "application/json; charset=UTF-8"
      }
    )
  }
}
