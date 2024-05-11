import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FuncionesListComponent } from './funciones-list/funciones-list.component';
import { UsuarioComponent } from './usuario/usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, FuncionesListComponent, UsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isAuthenticated : boolean = false
  showComponent(isOk : boolean){
    if(isOk){
      this.isAuthenticated = isOk;
    }
  }
  usuarioName: string = "Jordy";
  usuarioOcuppation: string = "Administrador";
}
