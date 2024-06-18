import { Component } from '@angular/core';
import { ListaService } from '../lista/lista.service';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

  constructor (public listaService:ListaService) {}


}