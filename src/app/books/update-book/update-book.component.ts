import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  bookFrm :Book={}
  id: String = ''
  book: Book | undefined
  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookServiceService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    this.bookService.getBook(this.id).subscribe(res=>{
      this.book=res
      console.log(this.id)
    })
  }

  updateBook(){
    this.bookService.updateBook(this.id, this.bookFrm).subscribe(res=>{
      this.book=res
      console.log(res)
      this.id =''
    })
  }

  goToBooks(){
    this.router.navigate(['/books-list'])
  }



}
