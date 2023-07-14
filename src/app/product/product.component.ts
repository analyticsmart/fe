import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  implements OnInit {

  constructor() { }

  @Input() product: any;
  public product_name: string = ''

  ngOnInit() {
    this.product_name = this.product.name
  }

  update(){
    console.log(this.product, 'product')
    this.product.name = this.product_name
  }
}
