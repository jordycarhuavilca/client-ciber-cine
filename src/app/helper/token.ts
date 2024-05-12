export class Token {
  private static token: string | null = null;
  constructor() {}
  static getToken(): string | null {
    this.token = localStorage.getItem('access_token');
    return this.token;
  }
  static setToken(name: string , token: string) {
    this.token = token;
    localStorage.setItem(name, this.token);
  }
}
