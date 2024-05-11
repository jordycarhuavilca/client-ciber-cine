import { Component, inject, output } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'login-component',
  standalone: true,
  imports: [],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private loginService = inject(LoginService);
  loginTrigger = output<boolean>();
  private email: string = '';
  private password: string = '';
  processData(email: string, password: string) {
    // const res = this.validateCredentials(email,password);
    // if (res) {
    // }
    this.loginTrigger.emit(true);

  }
  async validateCredentials(email: string, password: string) {
    this.email = email;
    this.password = password;
    const { error } = await this.loginService.validateCredentials();
    if (error) return false;
    return true;
  }
}
