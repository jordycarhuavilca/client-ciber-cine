import { movieGender } from './movieGender';
import { sala } from './sala';
export interface funcion {
  idFuncion: number;
  fecha: string;
  idPeligen: movieGender;
  idSala: sala;
}
