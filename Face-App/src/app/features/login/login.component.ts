import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { MATERIAL_IMPORTS } from '../../shared/shared-modules';
import { AuthService } from '../../shared/services/auth-service/auth-service.service';
import { UserLoginRequest } from '../../core/models/UserLoginRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ...MATERIAL_IMPORTS
  ]
})
export class LoginComponent {

  private fb = inject(FormBuilder);  // ← injeta antes
  private authService = inject(AuthService);
  private router = inject(Router);
  public loginUser: UserLoginRequest | undefined;

  formLogin = this.fb.group({  // ← agora pode usar
    email: [''],
    password: ['']
  });

  public login() {
  const formValue = this.formLogin.value;

  // Valida se email e password existem e não estão vazios
  if (!formValue.email || !formValue.password) {
    console.error('Email e senha são obrigatórios');
    return;  // Para a execução aqui
  }

  this.loginUser = {
    login: formValue.email,
    senha: formValue.password
  };

  this.authService.login(this.loginUser).subscribe(() => {
    this.router.navigate(['/home']);
  });
}

}
