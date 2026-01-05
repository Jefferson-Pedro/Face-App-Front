import { Component, inject } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/shared-modules';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../shared/services/auth-service/auth-service.service';
import { Router } from '@angular/router';
import { UserRequest } from '../../core/models/UserRequest';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [
      ...MATERIAL_IMPORTS
    ]
})
export class RegisterComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  public loginUser: UserRequest | undefined;
  public hidePassword = true;
  public hideConfirmPassword = true;

  formRegister = this.fb.group({
    nome: [''],
    cpf: [''],
    email: [''],
    telefone: [''],
    login: [''],
    senha: [''],
    confirmarSenha: ['']
  });


  public register() {
      this.loginUser = {
        nome: this.formRegister.value.nome || '',
        cpf: this.formRegister.value.cpf || '',
        email: this.formRegister.value.email || '',
        telefone: this.formRegister.value.telefone || '',
        login: this.formRegister.value.login || '',
        senha: this.formRegister.value.senha || ''
      };

      this.authService.register(this.loginUser).subscribe({
        next: (response) => {
          console.log('Usuário registrado com sucesso:', response);
          // Redirecionar para a página de reconhecimento facial após o registro bem-sucedido
          this.router.navigate(['/face-recognition']);
        },
        error: (error) => {
          console.error('Erro ao registrar usuário:', error);
        }
      });
  }

}
