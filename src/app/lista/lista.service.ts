import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }

  listaStr: string []=[
    'Mac&Cheese Burger',
    'Hot Dog Insano',
    'Mango Soda',
    'Normal Burger',
    'Big Doble Cheese Burger'
  ];
}


// { comida: 'Mac&Cheese Burger', precio: '$9.99' },
// { comida: 'Hot Dog Insano', precio: '$4.99' },
// { comida: 'Mango Soda', precio: '$2.99' },
// { comida: 'Normal Burger', precio: '$4.99' },
// { comida: 'Big Doble Cheese Burger', precio: '$9.99' }