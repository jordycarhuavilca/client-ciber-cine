import { Component, inject, output } from '@angular/core';
import { UpdFuncionService } from './upd-funcion.service';
import { UpdFuncion } from './dto/upd-funcion';

@Component({
  selector: 'app-upd-funcion',
  standalone: true,
  imports: [],
  providers: [UpdFuncionService],
  templateUrl: './upd-funcion.component.html',
  styleUrl: './upd-funcion.component.css'
})
export class UpdFuncionComponent {
  private updFuncionService = inject(UpdFuncionService);
  cancelTrigger = output();

  isCreated = {
    isOk: false,
    message: '',
    color: 'alert alert-danger',
  };
  goBack() {
    this.cancelTrigger.emit();
  }
  async processData(
    idMovieGender: string,
    idMovie: string,
    name: string,
    movieDirector: string,
    duration: string,
    language: string,
    gender: string
  ) {
    const updFuncion: UpdFuncion = {
      idPeligen: Number(idMovieGender),
      idPelicula: Number(idMovie),
      nombrePelicula: name,
      idiomaPelicula: language,
      directorPelicula: movieDirector,
      duracionPelicula: duration,
      idGenero: Number(gender),
    };
    const { code } = await this.updFuncionService.update(updFuncion);
    if (code === 200) {
      (this.isCreated.isOk = true),
        (this.isCreated.message = 'La Pelicula fue actualizada con éxito');
      this.isCreated.color = 'alert alert-success';
    } else {
      this.isCreated.message = 'hubo un error al actualizar la pelicula';
    }
  }
}