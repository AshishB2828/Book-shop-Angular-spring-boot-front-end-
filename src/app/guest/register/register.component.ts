import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();
  errMsg:string = ""
  faUser=faUserCircle

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

    if(this.authService.currentUserValue?.id)
    {this.router.navigate(['/profile'])}
  }

  register() {
    console.log('will')
    this.authService.resgister(this.user).subscribe(
      (data: any) => {
        this.router.navigate(['/login'])
      },
      (error)=>{
        if(error.status === 409){
          this.errMsg="The username alread exists!"
        }else{
          this.errMsg ="error occured"
        }
        console.log(error);
      }
    )
  }

}
