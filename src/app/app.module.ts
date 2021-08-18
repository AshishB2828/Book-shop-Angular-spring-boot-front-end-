import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as Bootstrap from "bootstrap"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { HomeComponent } from './guest/home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AdminComponent } from './admin/admin/admin.component';
import { UauthroizedComponent } from './error/uauthroized/uauthroized.component';
import { NotfoundComponent } from './error/notfound/notfound.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './admin/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    UauthroizedComponent,
    NotfoundComponent,
    NavigationComponent,
    BookComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
