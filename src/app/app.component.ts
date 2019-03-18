import { Component, AfterViewInit, TemplateRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CarouselPageDirective } from './carousel-page.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngularTestDirective';

  list = [1, 2, 3, 4, 5];

  listValue = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  display = false;

  addNumber() {
    this.list.push(this.list.length + 1);
  }

  addValue() {
    this.listValue.push({ value: this.listValue.length + 1 });
  }

  // ================================================================
  // 輪播
  @ViewChildren(CarouselPageDirective) carouselPages: QueryList<CarouselPageDirective>;
  displayPage: TemplateRef<any>;
  index = 0;

  setDisplayPage(index) {
    this.displayPage = this.carouselPages.find((item, index) => index === this.index).templateRef;
  }

  ngAfterViewInit(): void {
    this.setDisplayPage(this.index);
  }

  next() {
    this.index = (this.index + 1) % this.carouselPages.length;
    this.setDisplayPage(this.index);
  }
}
