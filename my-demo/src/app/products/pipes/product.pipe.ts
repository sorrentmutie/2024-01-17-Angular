import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'myProductPipe'
})
export class ProductPipe implements PipeTransform {

  transform(value: Product): string {
    return  `${value.name} - ${value.price} €`;
  }

}
