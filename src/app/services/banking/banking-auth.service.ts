import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankingAuthService {
  constructor(private http: HttpClient) {}

  getAuthUrl(): Observable<string> {
    return this.http.get<string>('/.netlify/functions/banking-authlink');
  }

  exchangeCode(code: string) {
    return this.http.post<any>('/.netlify/functions/banking-auth-code-exchange', { code });
  }
}
