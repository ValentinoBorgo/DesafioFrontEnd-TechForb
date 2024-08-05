import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number): string {
    if (!value && value !== 0) return '';
    return value.toLocaleString('de-DE');
  }
  
}
