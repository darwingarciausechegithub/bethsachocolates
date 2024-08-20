import { Component } from '@angular/core';

import { products } from '../products';
import { CarritoComponent }  from './carritoComponent'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('El producto ha sido Compartido!');
  }
  
  comprar(desproducto: string) {
    window.alert(desproducto + '   ha sido agregado al carrito de Compras  ');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
