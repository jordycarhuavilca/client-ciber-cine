import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CIBER_CINE_URI_API } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  constructor() {}
  private apiUrl = CIBER_CINE_URI_API;
  private http = inject(HttpClient);

  list(): Observable<any> {
    return this.http.get(`${this.apiUrl}/function/find`);
  }

  get(id: number) {
    return this.http.get(`${this.apiUrl}/function/find?id=${id}`);
  }

  create(funcion: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/function/add`, funcion, { headers });
  }

  update(funcion: any) {
    return this.http.get(`${this.apiUrl}/function/update`, funcion);
  }

  delete(funcion: any) {
    return this.http.get(`${this.apiUrl}/function/delete`, funcion);
  }
}
