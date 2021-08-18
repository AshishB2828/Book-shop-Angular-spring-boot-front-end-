import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/models/Book.model';
import { ItemsWithPage } from 'src/app/models/ListOfBokksWithPage.model';
import { BookService } from 'src/app/services/book.service';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pageSize:number =6;
  clicked:number=0;
  bookList: ItemsWithPage = new ItemsWithPage();
  errMsg:string =""
  selectedBook:Book =new Book()

  @ViewChild(BookComponent)child:BookComponent | undefined;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooksWithPage(0, this.pageSize).subscribe(
      data => {this.bookList = data
      console.log(this.bookList)}
      , error=> console.log(error.message)
    )
  }


  createBookRequest(){
    
    this.child?.showBookModal();
  }

  saveBookWatcher(book:Book) {
    let itemIndex = this.bookList?.content.findIndex(item=>item.id === book.id);

    if(itemIndex !== -1) this.bookList.content[itemIndex] = book;
    else  this.bookList?.content.push(book);
  }


  editBook(item:Book) {

    this.selectedBook = Object.assign({}, item)
    this.child?.showBookModal();
    
  }

  deleteBook(item:Book, index:number) {
    this.bookList.content.splice(index, 1)
    this.bookService.deleteBook(item).subscribe(
      data=>console.log(data),
      error=>{
        this.errMsg = "Unexpected error occured !"
        console.log(error)
      }
    )
  }

  
  pageCount(){
    return new Array(this.bookList.totalPages)
  }

  requestPage(pageNumber:any){
    this.clicked =pageNumber-1
     this.bookService.getAllBooksWithPage(pageNumber, this.pageSize).subscribe(
      (data)=> {
        this.bookList=data
      }
     )
    
  }
}
