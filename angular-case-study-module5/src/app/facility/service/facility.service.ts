import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Customer} from '../../customer/model/customer';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL + '/facility');
  }

  save(facility) {
   return this.http.post<Facility>(API_URL + '/facility', facility);
  }

  delete(id: number): Observable<Facility>  {
  return this.http.delete<Facility>(`${API_URL}/facility/${id}`);
  }

  findById(id: number) {
    return this.http.get<Facility>(`${API_URL}/facility/${id}`);
  }

  update(id: number, facility: any): Observable<Facility> {
    return this.http.put<Facility>(`${API_URL}/facility/${id}`, facility);
  }
}
