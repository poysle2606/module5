import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/category');
  }
  saveCategory(category): Observable<Category> {
    return this.http.post<Category>( 'http://localhost:3000/category', category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(`http://localhost:3000/category/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`http://localhost:3000/category/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`http://localhost:3000/category/${id}`);
  }
}
