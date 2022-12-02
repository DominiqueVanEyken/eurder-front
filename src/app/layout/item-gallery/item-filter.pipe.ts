import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../../model/Item";

@Pipe({
  name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

  transform(items: Item[], filterValue: string): Item[] {
    if (items === null) {
      return items;
    }
    return items.filter(items => items.name.toLowerCase().startsWith(filterValue.toLowerCase()));
  }

}
