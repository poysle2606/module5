import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {BenhAn} from '../model/benh-an';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<BenhAn[]> {
    return this.http.get<BenhAn[]>(API_URL);
  }

  delete(id: number): Observable<BenhAn> {
    return this.http.delete<BenhAn>(`${API_URL}/${id}`);
  }

  findById(id: number) {
    return this.http.get<BenhAn>(`${API_URL}/${id}`);
  }

  updatePatient(id: number, patient: BenhAn): Observable<BenhAn> {
    return this.http.put<BenhAn>(`${API_URL}/${id}`, patient);
  }

  save(patient) {
    return this.http.post<BenhAn>(API_URL, patient);
  }

  searchEverything(name: string): Observable<BenhAn[]> {
    return this.http.get<BenhAn[]>(`${API_URL}/?q=` + name);
  }
}
