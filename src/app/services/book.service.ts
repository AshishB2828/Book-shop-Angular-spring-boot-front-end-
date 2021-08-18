import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/Book.model';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';

const BASE_URL = `${environment.BASE_URL}book`

@Injectable({
  providedIn: 'root'
})
export class BookService extends RequestBaseService{

  constructor(authService: AuthenticationService, http:HttpClient) { 
    super(authService, http);
  }

  saveBook(book:Book):Observable<any> {
    return this.http.post(`${BASE_URL}/add`, book, {headers: this.getHeaders});
  }

  deleteBook(book:Book):Observable<any> {
    return this.http.delete(`${BASE_URL}/${book.id}`, {headers: this.getHeaders})
  }

  getAllBokks():Observable<any> {
    return this.http.get(`${BASE_URL}`)
  }

  
  getAllBooksWithPage(number:number, size:number):Observable<any> {
    return this.http.get(`${BASE_URL}/page?page=${number}&size=${size}`)
  }
}
