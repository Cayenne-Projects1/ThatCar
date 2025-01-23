import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { APIResponse } from '../API';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedUserSubject = new BehaviorSubject<any | null>(null);
  loggedUser$ = this.loggedUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(loginData: any): Observable<APIResponse> {
    return this.http
      .post<APIResponse>('https://localhost:7099/api/User/login', loginData)
      .pipe(
        tap((response) => {
          this.loggedUserSubject.next(response.data.user);
          console.log('Login successful:', response);
        })
      );
  }

  getLoggedUser(): Observable<any | null> {
    return this.loggedUser$;
  }
}
