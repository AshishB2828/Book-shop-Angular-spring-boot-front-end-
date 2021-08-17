import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  {

  currentLoggedInUser:User=new User();
  Admin:boolean =false;

  constructor(private authService: AuthenticationService, private router:Router){

    this.authService.currentUser.subscribe(data => {
      this.currentLoggedInUser = data
    })
  }

  
  isAdmin():boolean{
    this.currentLoggedInUser?.roles.forEach(rol => {
      if (rol.rolename === 'ADMIN')
      this.Admin = true
    })
    return this.Admin
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
