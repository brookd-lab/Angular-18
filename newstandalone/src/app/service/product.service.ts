import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/Productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl='http://localhost:3000/product';

  constructor(private http: HttpClient) { }

  GetAll() {
    return this.http.get<Product[]>(this.baseurl);
  }

  GetproductbyId(id:number) {
    return this.http.get<Product>(`${this.baseurl}/${id}`);
  }

  Createproduct(_data:Product) {
    return this.http.post(this.baseurl, _data);
  }

  Updateproduct(_data:Product) {
    return this.http.put(`${this.baseurl}/${_data.id}`, _data);
  }

  Removeproduct(_id:number) {
      return this.http.delete(`${this.baseurl}/${_id}`);
  }
}
