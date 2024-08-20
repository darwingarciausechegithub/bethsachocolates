import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
 @Input nombreProducto:string;
 
  productosCarrito:string[]=[];

  constructor() {}
  ngOnInit() {}

  agregarProducto() {

    this.productosCarrito.push(nombreProducto);

    this.productosCarrito.forEach(producto => {
       console.log(producto);
  })

}
