import { Component, inject, output } from '@angular/core';
import { AddFuncionService } from './add-funcion.service';
import { addFunction } from './dto/add-function.dto';

@Component({
  selector: 'app-add-funcion',
  standalone: true,
  imports: [],
  providers: [AddFuncionService],
  templateUrl: './add-funcion.component.html',
  styleUrl: './add-funcion.component.css',
})
export class AddFuncionComponent {
  private addFuncionService = inject(AddFuncionService);
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
    name: string,
    movieDirector: string,
    duration: string,
    language: string,
    gender: string
  ) {
    const newFunction: addFunction = {
      nombrePelicula: name,
      idiomaPelicula: language,
      directorPelicula: movieDirector,
      duracionPelicula: duration,
      idGenero: Number(gender),
    };
    const { code } = await this.addFuncionService.create(newFunction);
    if (code === 200) {
      (this.isCreated.isOk = true),
        (this.isCreated.message = 'La Pelicula fue registrada con exito');
      this.isCreated.color = 'alert alert-success';
    } else {
      this.isCreated.message = 'hubo un error al registra la pelicula';
    }
  }
}
