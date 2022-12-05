import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder) {
  }

}
