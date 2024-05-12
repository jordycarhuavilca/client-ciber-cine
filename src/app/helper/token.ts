export class Token {
  private static token: string | null = null;
  constructor() {}
  static getToken(): string | null {
    this.token = sessionStorage.getItem('access_token');
    return this.token;
  }
  static setToken(name: string , token: string) {
    this.token = token;
    sessionStorage.setItem(name, this.token);
  }
}
