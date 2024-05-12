import { Component, inject } from '@angular/core';
import { FuncionesListService } from './funciones.service';
import { DatePipe } from '@angular/common';
import { funcion } from './interfaces/funcion';
import { Token } from '../helper/token';
import { AddFuncionComponent } from './addFuncion/add-funcion.component';

@Component({
  selector: 'app-funciones-list',
  standalone: true,
  imports: [DatePipe, AddFuncionComponent],
  providers: [FuncionesListService],
  templateUrl: './funciones.component.html',
  styleUrl: './funciones.component.css',
})
export class FuncionesListComponent {
  private funcionesService = inject(FuncionesListService);
  isClickedAddButton = false
  funciones: funcion[] = [];
  // trackByFuncion(index: number, funcion: any): number {
  //   return funcion.idFuncion;
  // }
  addFunction(){
    this.isClickedAddButton = !this.isClickedAddButton;
  }

  async ngOnInit() {
    const res = await this.funcionesService.list();
    if (res) {
      this.funciones = res;
    } else {
      Token.setToken('access_token', '');
    }
  }
}
