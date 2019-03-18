import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCarouselPage]'
})
export class CarouselPageDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
