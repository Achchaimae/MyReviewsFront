import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  export class AuthService {
    
    private apiUrl = 'http://localhost:8080/api/v1/auth/'; 
  
    constructor(private http: HttpClient) { }
  
    register(userData: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/register`, userData);
    }
  
    login(credentials: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/authenticate`, credentials);
    }
  
    refreshToken(): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/refresh-token`, {});
    }
  
   
    isLoggedIn():boolean {
      throw new Error('Method not implemented.');
  }
  }

