import { cine } from './cine'

export interface sala {
  idSala: number;
  numeroSala: string;
  disponibilidadSala: boolean;
  numeroButacas: number;
  idCine: cine;
}