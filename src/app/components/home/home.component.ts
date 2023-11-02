import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class  HomeComponent {
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

