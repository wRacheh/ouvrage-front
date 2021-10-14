import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookPage } from 'src/app/model/book-page';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
 public BookList:Book[]=[]
 //private books:BookPage;
  private keyword:string="";
  private currentPage:number=1;
  private pageSize:number=5;
  private pages:any;

  constructor(private BookService:BookServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getAllBook()
  }

  // private onSearchBooks() {
  //   this.BookService.searchBooks(this.keyword,this.curr
  //   entPage,this.pageSize)
  //   .subscribe(data=>{
  //   this.books=data;
  //   this.pages=new Array<number>(data.pages);
  //   },err=>{
  //   console.log(err);
  //   })
  //   }
  getAllBook(){
    this.BookService.getAllBooks().subscribe(res=>{
      this.BookList=res;
      console.log(this.BookList)
    },
    error=>{
      console.log(error)
    })
  }

  deletBook(id:any){
    this.BookService.deletBook(id).subscribe(res=>{
      console.log("deleted")
      this.getAllBook()
      
    })
  }

//  onSearchBooks() {
//     this.BookService.searchBooks(this.keyword,this.currentPage,this.pageSize)
//     .subscribe(data=>{
//     this.books=data;
//     this.pages=new Array<number>(data.pages);
//     },err=>{
//     console.log(err);
//     })
//     }
reload(){
  this.getAllBook()
  location.reload()
}
updateBook(id:any){
  this.router.navigate(['update-book',id])
}


}
