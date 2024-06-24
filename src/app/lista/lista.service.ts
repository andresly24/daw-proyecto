import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }

  // listaStr: string []=[
  //   'Mac&Cheese Burger',
  //   'Hot Dog Insano',
  //   'Mango Soda',
  //   'Normal Burger',
  //   'Big Doble Cheese Burger'
  // ];

  listaJson: any []=[
    {id:1, nombre:'Mac&Cheese Burger', precio:10.99, img:''},
    {id:2, nombre:'Hot Dog Insano', precio:8.99, img:''},
    {id:3, nombre:'Mango Soda', precio:2.99, img:''},
    {id:4, nombre:'Normal Burger', precio:7.99, img:''},
    {id:5, nombre:'Big Doble Cheese Burger', precio:12.99, img:''}
    ];
}


// { comida: 'Mac&Cheese Burger', precio: '$9.99' },
// { comida: 'Hot Dog Insano', precio: '$4.99' },
// { comida: 'Mango Soda', precio: '$2.99' },
// { comida: 'Normal Burger', precio: '$4.99' },
// { comida: 'Big Doble Cheese Burger', precio: '$9.99' }