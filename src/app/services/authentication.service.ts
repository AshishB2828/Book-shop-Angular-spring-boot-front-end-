import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUser:Observable<User>
  private currentUserSubject:BehaviorSubject<User>
  private BASE_URL = environment.BASE_URL
  
  constructor(private http:HttpClient) {
    let storedUser;
      const storageUserAsStr = localStorage.getItem('currentUser');
      if(storageUserAsStr){
        storedUser = JSON.parse(storageUserAsStr);
      }

      this.currentUserSubject = new BehaviorSubject(storedUser);
      this.currentUser = this.currentUserSubject.asObservable();
   }

  get currentUserValue():User{
    return this.currentUserSubject.value;
  }

   login(user:any):Observable<any> {

    return this.http.post<any>(this.BASE_URL+'auth/signin', user).pipe(
      map(response => {
        if(response){
          localStorage.setItem('currentUser', JSON.stringify(response))
          this.currentUserSubject.next(response);
        }
        return response;
      })
    )
   }

   resgister(user: User): Observable<any> {
     return this.http.post<any>(this.BASE_URL+'auth/signup', user)
   }

   logout(){
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(new User);
   }

}
