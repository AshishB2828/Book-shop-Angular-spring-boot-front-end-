import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  currentLoggedInUser:User = new User();
  isAuthorized:boolean = true;

  constructor(private authService: AuthenticationService, private router: Router){
      this.authService.currentUser.subscribe(data=> this.currentLoggedInUser = data)
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if(this.currentLoggedInUser){ //checking if there is a user or not if not execute else and redirect user to login
       //checking the user is authorized to view the page
        this.currentLoggedInUser.roles?.every(role => {
         if(route.data.roles.indexOf(role.rolename)===-1){
           this.isAuthorized=false
         }else{
           this.isAuthorized =true
         }
       })
       if(!this.isAuthorized){
        this.router.navigate(['/401'])  
        return false
       }
       return true
      }
      this.router.navigate(['/login'])
      return true;
  }
  
}
