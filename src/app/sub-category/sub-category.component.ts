import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent  implements OnInit {

  constructor() { }

  @Input() sub_category: any;

  ngOnInit() { 
    for(let index in this.sub_category.products){
      this.sub_category.products[index].sub_category = {
        name: this.sub_category.name
        , id: this.sub_category.id,
        category: this.sub_category.category
      }
    }
  }

}
