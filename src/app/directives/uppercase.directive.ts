import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

export function formatName(val: string): string {
  return val.toUpperCase().replace(/[^a-zA-ZÀ-ú\'\s\-]/, "")
}

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(private control: NgControl) {
    console.log('Directiva llamada');
  }

    @HostListener('input', ['$event'])
    public onInput(): void {
            this.control.control.setValue(formatName(this.control.value));
    }

}
