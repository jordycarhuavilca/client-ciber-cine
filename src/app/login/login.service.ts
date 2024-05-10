import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CIBER_CINE_URI_API } from '../config/config'
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);

  constructor() {}
  async validateCredentials(){
    this.http.get(`${CIBER_CINE_URI_API}/`, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).subscribe(config => {

    });
    return {
      error : false
    }
  }
}
