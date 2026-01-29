import { Injectable } from '@angular/core';

interface JwtPayload {
  id: number;
  email: string;
  exp: number;
}

@Injectable({ providedIn: 'root' })
export class TokenStorage {
  private key = 'token';

  

  get(): string | null {
    return localStorage.getItem(this.key);
  }

  set(token: string) {
    localStorage.setItem(this.key, token);
  }

  clear() {
    localStorage.removeItem(this.key);
  }

  isLogged(): boolean {
    return !!this.get();
  }

  getToken(): string | null {
    return localStorage.getItem(this.key);
  }

  getUserEmail(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1])) as JwtPayload;
      return payload.email;
    } catch {
      return null;
    }
  }
}
