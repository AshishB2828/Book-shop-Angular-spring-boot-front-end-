import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/models/Book.model';
import { PurchaseHistory } from 'src/app/models/PurchaseHistory.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BookService } from 'src/app/services/book.service';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  successMessage: string =""
  errMsg: string =""
  bookList:Array<Book> =[]


  constructor(private authService: AuthenticationService, 
              private bookService: BookService,
              private purchaseService: PurchaseService) { }

  ngOnInit(): void {

    this.bookService.getAllBokks().subscribe(
      data => this.bookList =data
      ,error =>{
        this.errMsg="error occured!  "
        setTimeout(() =>{this.successMessage =""}, 2000)
        console.log(error)
      }
    )

  }

  purchaseBook(item:Book){
    if(!this.authService.currentUserValue?.id){
      this.errMsg="Please login!"
      setTimeout(() =>{this.successMessage =""}, 2000)
      
    }

    const purchaseHistory = new PurchaseHistory(this.authService.currentUserValue.id, item.id,item.price)

    this.purchaseService.savePurChase(purchaseHistory).subscribe(
      (data) =>{ this.successMessage="purchase success"
                  setTimeout(() =>{this.successMessage =""}, 2000)
                }
      ,error =>{this.errMsg=" error occured"
      setTimeout(() =>{this.errMsg =""}, 2000)
         console.log(error)}
    )
  }

}
