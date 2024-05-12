import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FuncionesListComponent } from './funciones/funciones.component';
import { HttpClientModule } from '@angular/common/http';
import { Token } from './helper/token'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    FuncionesListComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isAuthenticated: boolean = false;
  showComponent(isOk: boolean) {
    if (isOk) {
      this.isAuthenticated = isOk;
    }
  }
  ngOnInit(){
    const token = Token.getToken()
    if (token) {
      this.isAuthenticated = true
    }
  }
}
