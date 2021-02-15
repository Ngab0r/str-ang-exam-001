import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../model/hero';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Hero[], phrase: string): Hero[] {
    return value.filter(item => item.name.toString().toLowerCase().includes(phrase.toLowerCase()));
  }

}
