import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CIBER_CINE_URI_API } from '../../config/config';
import { Token } from '../../helper/token';
import { addFunction } from './dto/add-function.dto';
@Injectable({
  providedIn: 'root',
})
export class AddFuncionService {
  private apiUrl = CIBER_CINE_URI_API;
  private http = inject(HttpClient);
  constructor() {}

  create(funcion: addFunction): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token.getToken()}`,
    });
    const newFunction = {
      pelicula: {
        nombrePelicula: funcion.nombrePelicula,
        directorPelicula: funcion.directorPelicula,
        duracionPelicula: funcion.duracionPelicula,
        idiomaPelicula: funcion.idiomaPelicula,
      },
      genero: {
        idGenero: funcion.idGenero,
      },
    };
    const promise : any = new Promise((resolve, reject) => {
      this.http
        .post<addFunction>(`${this.apiUrl}/movies/add`, newFunction, {
          headers,
        })
        .subscribe((data) => {
          return resolve(data);
        });
    });
   
    return promise;
  }
}
