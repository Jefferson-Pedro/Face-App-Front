import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/shared-modules';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ...MATERIAL_IMPORTS
  ]
})
export class LoginComponent {}
