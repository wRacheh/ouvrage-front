import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { BookPage } from '../model/book-page';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  public host: string = "http://localhost:8700";
  constructor(private http: HttpClient) { }


  public searchBooks(keyword: string, page: number,
    size: number): Observable<BookPage> {
    return this.http.get<BookPage>(this.host + "/books-search?kw=" + keyword + "&page=" + page + "&size=" + size);
  }

  public saveBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.host + "/books", book);
  }

  public getAllBooks() :Observable<any>{
    return this.http.get(this.host + "/books")
  }

  public getBook(id:any):Observable<any>{
    return this.http.get(this.host + "/books/"+id)
  }

  public deletBook(id:any):Observable<any>{
    return this.http.delete(this.host+"/books/"+id)
  }

public updateBook(id:any, data:Book): Observable<any>{
  return this.http.put(this.host+"/books/"+id,data)
}



}
