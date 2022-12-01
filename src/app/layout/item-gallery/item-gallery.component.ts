import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ItemsService} from "../../service/items.service";
import {Item} from "../../model/Item";

@Component({
  selector: 'app-item-gallery',
  templateUrl: './item-gallery.component.html',
  styleUrls: ['./item-gallery.component.css']
})
export class ItemGalleryComponent implements OnInit{
  private readonly IMG_PREFIX:string = '../../../assets/img/'
  items$!: Observable<any>;

  constructor(private itemService: ItemsService) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.items$ = this.itemService.getItems;
  }

  getStockStatusValue(item: Item): string {
    if (item.stockStatus.includes('STOCK_LOW')) {
      return 'LOW';
    }
    if (item.stockStatus.includes('STOCK_MEDIUM')) {
      return 'MEDIUM';
    }
    return 'HIGH';
  }

  getStockStatusImage(item: Item): string {
    if (item.stockStatus.includes('STOCK_LOW')) {
      return `${this.IMG_PREFIX}/warning-icon-red.png`;
    }
    if (item.stockStatus.includes('STOCK_MEDIUM')) {
      return `${this.IMG_PREFIX}/warning-icon-orange.png`;
    }
    return `${this.IMG_PREFIX}/warning-icon-green.png`;
  }
}
