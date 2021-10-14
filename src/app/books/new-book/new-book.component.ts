import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  public book: Book = {};
  public mode:number=0;
  constructor(private booksService: BookServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSaveBook(data: Book) {
    this.booksService.saveBook(data)
    .subscribe(res=>{
    this.book=res;
    this.mode=1;
    this.goToBooks()
    },err=>{
    console.log(err);
    })
    }

    goToBooks(){
      this.router.navigate(['/books-list'])
    }
}
