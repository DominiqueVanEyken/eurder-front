import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ItemsService} from "../../service/items.service";
import {Item} from "../../model/Item";
import {KeycloakService} from "../keycloak/keycloak.service";

@Component({
  selector: 'app-item-gallery',
  templateUrl: './item-gallery.component.html',
  styleUrls: ['./item-gallery.component.css']
})
export class ItemGalleryComponent implements OnInit{
  private readonly IMG_PREFIX:string = '../../../assets/img/'
  items$!: Observable<any>;
  searchText: string = '';

  constructor(private itemService: ItemsService, protected keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.items$ = this.itemService.getItems;
  }

  // TODO: Update after refactor Eurder backend
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
