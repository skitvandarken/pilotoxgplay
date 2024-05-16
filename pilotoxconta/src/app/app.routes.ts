import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { EliminarComponent } from './paginas/eliminar/eliminar.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RodapeComponent } from './layout/rodape/rodape.component';

export const routes: Routes = [
    {path:'', component: InicioComponent},
    {path:'inicio', component: InicioComponent},
    {path:'eliminar', component: EliminarComponent},
    {path:'acerca', component: AcercaComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'rodape', component: RodapeComponent}
];
