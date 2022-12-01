import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ItemsService} from "../../service/items.service";

@Component({
  selector: 'app-item-gallery',
  templateUrl: './item-gallery.component.html',
  styleUrls: ['./item-gallery.component.css']
})
export class ItemGalleryComponent implements OnInit{
  items$!: Observable<any>;

  constructor(private itemService: ItemsService) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.items$ = this.itemService.getItems;
    this.items$.subscribe(items => console.log(items));
  }


}
