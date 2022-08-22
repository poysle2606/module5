import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/product');
  }


  saveProduct(product): any {
    this.products.push(product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/product/${id}`);
  }
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`http://localhost:3000/product/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
   return this.http.delete(`http://localhost:3000/product/${id}`);
  }
}
