import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookComponent } from './books/list-book/list-book.component';
import { NewBookComponent } from './books/new-book/new-book.component';
import { UpdateBookComponent } from './books/update-book/update-book.component';

const routes: Routes = [

   {path:"books-list", component:ListBookComponent},
   {path:"book-new", component:NewBookComponent},
   {path:"update-book/:id", component:UpdateBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
