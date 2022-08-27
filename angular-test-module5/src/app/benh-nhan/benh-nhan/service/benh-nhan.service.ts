import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {BenhNhan} from '../model/benh-nhan';
import {BenhAn} from '../../../benh_an/model/benh-an';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<BenhNhan[]> {
    return this.http.get<BenhNhan[]>(API_URL + '/patienter');
  }

  save(patienter) {
    return this.http.post<BenhNhan>(API_URL + '/patienter', patienter);
  }
  findById(id: number) {
    return this.http.get<BenhNhan>(`${API_URL}/patienter/${id}`);
  }
}
