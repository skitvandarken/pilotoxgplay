import { Component } from '@angular/core';
import { MenuComponent } from '../layout/menu/menu.component';
import { RodapeComponent } from '../layout/rodape/rodape.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [

    MenuComponent,
    RodapeComponent

  ],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {

}
