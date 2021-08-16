import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginReq={username:"", password:""}
  errMsg:string = ""

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

    if(this.authService.currentUserValue?.id)
    {this.router.navigate(['/profile'])}
  }

  login(){
    this.authService.login(this.loginReq).subscribe(
      (response) => { this.router.navigate(['/profile'])},
      error=>{
        this.errMsg="username and password are incorrect"
        console.log(error?.message)
      }
    )
  }

}
