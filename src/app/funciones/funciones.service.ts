import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CIBER_CINE_URI_API } from '../config/config';
import { Token } from '../helper/token';
import { funcion } from './interfaces/funcion'
@Injectable({
  providedIn: 'root',
})
export class FuncionesListService {
  constructor() {}
  private apiUrl = CIBER_CINE_URI_API;
  private http = inject(HttpClient);
  private headers: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${Token.getToken()}`,
  });

  list(): Promise<funcion[] | null> {

    const res = new Promise<funcion[] | any>(
      (resolve, reject) => {
        this.http
          .get(`${this.apiUrl}/function/find`, {
            headers: this.headers,
          })
          .subscribe((response) => {
            if (response.hasOwnProperty('list')) {
              const list =  (response as any).list as funcion[];
              if (list.length > 0) return resolve(list);
            }
            return reject(response);
          });
      }
    ).catch((err)=>{
      return null
    });
    return res;
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
