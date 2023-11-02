import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'books',component:BooksComponent},
  {path:'books/:id',component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
