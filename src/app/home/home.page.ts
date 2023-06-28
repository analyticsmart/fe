import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor() { }

  public categories: Array<any> = [
    {
      name: 'Category 1',
      id: 1,
      sub_categories: [
        {
          name: 'Sub Category 1',
          id: 1,
          products: [
            {
              name: 'Product 1',
              id: 1
            },
            {
              name: 'Product 2',
              id: 2
            },
          ]
        },
        {
          name: 'Sub Category 2',
          id: 2,
          products: [
            {
              name: 'Product 3',
              id: 3
            }
          ]
        }
      ]
    },
    {
      name: 'Category 2',
      id: 2,
      sub_categories: [
        {
          name: 'Sub Category 3',
          id: 3,
          products: [
            {
              name: 'Product 4',
              id: 4
            },
            {
              name: 'Product 5',
              id: 5
            },
          ]
        }
      ]
    }
  ]
}
