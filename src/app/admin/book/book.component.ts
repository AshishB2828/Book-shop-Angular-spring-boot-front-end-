import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/Book.model';
import { BookService } from 'src/app/services/book.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent  {

  errMsg:string =''
  showModal:boolean =false
  
  @Input()book:Book=new Book();
  @Output() emitDataToParent = new EventEmitter();

  constructor(private bookService:BookService) { }

 createBook(){
  this.showModal=!this.showModal
   this.bookService.saveBook(this.book).subscribe(
     data=>this.emitDataToParent.emit(data)
     , error=>{
       this.errMsg="An unexpected error occured !"
      console.log(error)}
   )
 }

  showBookModal(){
   this.showModal=!this.showModal
  }

}
