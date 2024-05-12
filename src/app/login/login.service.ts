import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CIBER_CINE_URI_API } from '../config/config';
import { login } from './interfaces/login';
import { Observable } from 'rxjs';
import { Token } from '../helper/token';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  constructor() {}
  validateCredentials(user: string, password: string): Promise<string | null> {
    const body: login = {
      usuario: user,
      contrasenia: password,
    };
    const token: any | string = new Promise((resolve, reject) => {
      this.http
        .post<typeof user>(
          `${CIBER_CINE_URI_API}/user/login`,
          JSON.stringify(body),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .subscribe((value) => {
          if (value.hasOwnProperty('token')) {
            const data = value as any;
            if (data?.error) return reject(data);
            Token.setToken('access_token',data?.token.split('Bearer')[1])
            return resolve(data?.token);
          }
        });
    }).catch((error) => {
      console.warn(error);
      return null;
    });

    return token;
  }
}
