import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { UserLoginRequest } from '../../../core/models/UserLoginRequest';
import { UserRequest } from '../../../core/models/UserRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private route = inject(Router);
  private http = inject(HttpClient);

  public login(login: UserLoginRequest) {
    const url = `${environment.baseUrl}/user/login`;

    return this.http.post(url, login);
  }

  public register(newUser: UserRequest){
    const url = `${environment.baseUrl}/user/new`;

    return this.http.post(url, newUser, { responseType: 'text' });
  }
}
