import { Component, inject } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-funciones-list',
  standalone: true,
  imports: [DatePipe],
  providers : [ProviderService],
  templateUrl: './funciones-list.component.html',
  styleUrl: './funciones-list.component.css',
})
export class FuncionesListComponent {
  private providerService = inject(ProviderService);
  trackByFuncion(index: number, funcion: any): number {
    return funcion.idFuncion;
  }

  funciones: any[] = [];

  ngOnInit(): void {
    this.providerService.list().subscribe((response: any) => {
      console.log(response)
      if (response.hasOwnProperty('list') && Array.isArray(response.list)) {
        this.funciones = response.list;
      } else {
        console.error(
          'La respuesta del servidor no tiene un formato válido:',
          response
        );
        this.funciones = [];
      }
    });
  }
}
