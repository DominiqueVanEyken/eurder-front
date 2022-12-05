import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ItemsService} from "../../service/items.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {
  itemForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    amount: ''
  });
  message!: string;

  constructor(private itemService: ItemsService, private formBuilder: FormBuilder, private router:Router) {
  }

  onSubmit() {
    this.itemService.addItem(this.itemForm.value)
      .subscribe(result => {
        this.message ='ITEM CREATED';
        setTimeout(() => this.router.navigateByUrl(''), 2000);
        })
  }
}
