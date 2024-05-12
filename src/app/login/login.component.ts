import { Component, inject, output } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'component-login',
  standalone: true,
  imports: [],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private loginService = inject(LoginService);
  loginTrigger = output<boolean>();
  credentials = {
    isOk: false,
    message: '',
  };

  async processData(email: string, password: string) {
    const res = await this.validateCredentials(email, password);
    console.log(res);
    if (!res) {
      this.credentials.isOk = true;
      this.credentials.message = 'Incorrect Credentials';
    }
    if (res) this.loginTrigger.emit(true);
  }
  async validateCredentials(email: string, password: string) {
    return await this.loginService.validateCredentials(email, password);
  }
}
