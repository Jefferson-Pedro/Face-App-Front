import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/shared-modules';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ...MATERIAL_IMPORTS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
