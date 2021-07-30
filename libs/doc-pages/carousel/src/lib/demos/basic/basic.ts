import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-carousel-basic',
  templateUrl: './basic.html'
})
export class DemoCarouseBasicComponent {
  itemPerSlide = 3;

  changeItemPerSlide() {
    this.itemPerSlide = 2
  }
}
