import { Component, Input, inject } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'usuario-component',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input() usuario: string="";
  @Input() occupation: string="";

  private providerService = inject(ProviderService);
  trackByUser(index: number, user: any): number {
    return user.idUsuario;
  }

  users: any[] = [];

  ngOnInit(): void {
    this.providerService.list().subscribe((response: any) => {
      console.log(response)
      if (response.hasOwnProperty('list') && Array.isArray(response.list)) {
        this.users = response.list;
      } else {
        console.error(
          'La respuesta del servidor no tiene un formato válido:',
          response
        );
        this.users = [];
      }
    });
  }
}
