import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  getAllBooks() {
    return this.http.get(
      `${environment.endpoint}/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book`
    );
  }

  getBook(id: any) {
    return this.http.get(
      `${environment.endpoint}/api/v2/storefront/products/${id}`
    );
  }
}
