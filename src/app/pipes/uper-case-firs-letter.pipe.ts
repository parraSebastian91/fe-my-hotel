import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uperCaseFirsLetter'
})
export class UperCaseFirsLetterPipe implements PipeTransform {

  transform(value: any): unknown {
    // capitalize the first letter of the word
    return `${value.replace(/[_]/gi, ' ').replace(/\b\w/g, (l: any) => l.toUpperCase())}`;
  }

}
