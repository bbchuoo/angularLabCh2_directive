import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  show = true;
  classFlag = true;
  username = true;
  names = ['Aarav', 'Martín', 'Shannon', 'Ariana', 'Kai'];
  constructor() { }

  ngOnInit() {
  }

  changeClass(): void {
    this.classFlag = !this.classFlag;
  }

  getClass() {
    if (this.classFlag) {
      return 'second';
    } else {
      return null;
    }
    // 這裡可以用程式動態決定要回傳字串、陣列或物件
  }

}
