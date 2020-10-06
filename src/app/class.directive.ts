import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  @Input('appClass') set classNames(classesObj: any) {
    // tslint:disable-next-line:prefer-const
    for (let key in classesObj) {
      if (classesObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
