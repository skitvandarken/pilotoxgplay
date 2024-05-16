import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../layout/menu/menu.component';
import { EliminarComponent } from '../eliminar/eliminar.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

RouterModule

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    RouterModule,   
    MenuComponent,
    EliminarComponent,
    RodapeComponent
    

  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
