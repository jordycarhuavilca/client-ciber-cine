import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CIBER_CINE_URI_API } from '../../config/config';
import { UpdFuncion } from './dto/upd-funcion';
import { Token } from '../../helper/token';

@Injectable({
  providedIn: 'root'
})
export class UpdFuncionService {
  private apiUrl = CIBER_CINE_URI_API;
  private http = inject(HttpClient)
  constructor() { }

  update(funcion: UpdFuncion): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token.getToken()}`,
    });
    const updFunction = {
      idPeligen: funcion.idPeligen,
      pelicula: {
        idPelicula: funcion.idPelicula,
        nombrePelicula: funcion.nombrePelicula,
        directorPelicula: funcion.directorPelicula,
        duracionPelicula: funcion.duracionPelicula,
        idiomaPelicula: funcion.idiomaPelicula
      },
      genero: {
        idGenero: funcion.idGenero
      }
    };
    const promise : any = new Promise((resolve, reject) => {
      this.http
        .patch<UpdFuncion>(`${this.apiUrl}/movies/update`, updFunction, {
          headers,
        })
        .subscribe((data) => {
          return resolve(data);
        });
    });
   
    return promise;
  }
}
