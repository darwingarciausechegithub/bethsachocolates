import { Component, OnInit , Input  } from '@angular/core';


@Component({
  selector: 'app-products-alert',
  templateUrl: './products-alert.component.html',
  styleUrls: ['./products-alert.component.css']
})
export class ProductsAlertComponent implements OnInit {
   @Input() product;
  constructor() { }

  ngOnInit() {
  }

}