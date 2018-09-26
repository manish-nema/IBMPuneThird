import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversetext'
})
export class ReversetextPipe implements PipeTransform {
// to make custome pipe need to overriede following method
  transform(value: string, args?: any): string {
    if(!value ) 
    {
    return '';
  }
  if(value ==='')
  {
    return '';
  }
    return  value.split('').reverse().join('');
  }

}
