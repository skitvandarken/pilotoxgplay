import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

import { InicioComponent } from '../../paginas/inicio/inicio.component';
import { AcercaComponent } from '../../paginas/acerca/acerca.component';
import { PrivacidadeComponent } from '../../paginas/privacidade/privacidade.component';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ RouterModule, RouterLink, RouterLinkActive, InicioComponent, AcercaComponent,  PrivacidadeComponent ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
