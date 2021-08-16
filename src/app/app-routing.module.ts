import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { NotfoundComponent } from './error/notfound/notfound.component';
import { UauthroizedComponent } from './error/uauthroized/uauthroized.component';
import { HomeComponent } from './guest/home/home.component';
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  {path:'home', redirectTo:'home', pathMatch: 'full'},
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent},
  {path:'admin', component:AdminComponent},
  {path:'404', component:NotfoundComponent},
  {path:'401', component:UauthroizedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router: Router){
    this.router.errorHandler= (error:any)=>{
      this.router.navigate(['/404'])
    }
  }

}
