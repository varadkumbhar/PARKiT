import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nA'
})
export class NAPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
