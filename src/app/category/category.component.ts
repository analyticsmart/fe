import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent  implements OnInit {

  constructor() { }

  @Input() category: any;

  ngOnInit() {
    for(let index in this.category.sub_categories){
      this.category.sub_categories[index].category = {
        name: this.category.name
        , id: this.category.id
      }
    }
  }

}
