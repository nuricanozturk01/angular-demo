import {Pipe, PipeTransform} from '@angular/core';
import {Product} from "./Product";

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], text?: string): Product[] {
    text ? text.toLocaleLowerCase() : null;

  return text ? value.filter((product : Product) => product.name.toLocaleLowerCase().indexOf(text) !== -1) : value;
  }

}
