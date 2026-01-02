import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { UserLoginRequest } from '../../../core/models/UserLoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private route = inject(Router);
  private http = inject(HttpClient);

  public login(login: UserLoginRequest) {
    const url = `${environment.baseUrl}/users/login`;

    return this.http.post(url, login);
  }
}
