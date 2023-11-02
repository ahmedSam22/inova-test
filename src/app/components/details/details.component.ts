import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  bookDetails:any;
  constructor(private route: ActivatedRoute,private data:HttpService){
    const id = this.route.snapshot.params['id'];
    this.data.getBook(id).subscribe((res:any)=>{
      this.bookDetails = res.data.attributes
    })


  }

}
