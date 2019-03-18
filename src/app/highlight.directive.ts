import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlightExport'
})
export class HighlightDirective implements AfterViewInit {

  constructor(private _el: ElementRef) {
    // 這邊是空白的(要注意生命週期)
    console.log((this._el.nativeElement as HTMLParagraphElement).innerText);
    this._el.nativeElement.style.background = 'yellow'; // 可以先設定
  }

  ngAfterViewInit(): void {
    console.log((this._el.nativeElement as HTMLParagraphElement).innerText);
  }

  showMessage() {
    console.log('show message');
  }
}
