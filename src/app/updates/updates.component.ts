import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent  implements OnInit {

  constructor() { }
  
  public changes: any = {
    previous: 'Test',
    current: 'Test 1',
    category: 'Category 1',
    sub_category: 'Sub Category 1'
  };
  
  ngOnInit() {}
}
