import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ContactosComponent } from './contactos/contactos.component';



export const routes: Routes = [
{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
{ path: 'inicio', component: InicioComponent },
{ path: 'nosotros', component: NosotrosComponent },
{ path: 'pedidos', component: PedidosComponent },
{ path: 'contactos', component: ContactosComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
