import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { EliminarComponent } from './paginas/eliminar/eliminar.component';
import { PrivacidadeComponent } from './paginas/privacidade/privacidade.component';

export const routes: Routes = [
    {path:'', component:InicioComponent},
    {path:'inicio', component: InicioComponent},
    {path:'eliminar', component: EliminarComponent},
    {path:'suporte', component: InicioComponent},
    {path:'privacidade', component: PrivacidadeComponent}


];
