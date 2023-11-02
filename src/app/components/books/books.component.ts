import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  allBooks:any[] = [];
  constructor(private data:HttpService){

  }
  ngOnInit(){
    this.data.getAllBooks().subscribe((e:any)=>{
      this.allBooks = e.data
      console.log(this.allBooks);
      
    }
    )
  }
}
