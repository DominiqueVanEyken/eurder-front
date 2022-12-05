import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validator, Validators} from "@angular/forms";
import {ItemsService} from "../../service/items.service";
import {Router} from "@angular/router";
import {CreateItem} from "../../model/CreateItem";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {
  item: CreateItem = ({
    name: '',
    description: '',
    price: 0,
    amount: 0
  });
  itemForm = this.formBuilder.group({
    name: new FormControl(this.item.name, [Validators.required]),
    description: new FormControl(this.item.description, [Validators.required]),
    price: new FormControl(this.item.price, [Validators.required]),
    amount: new FormControl(this.item.amount, [Validators.required])
  });
  message!: string;
  counter = this.item.description.length;

  constructor(private itemService: ItemsService, private formBuilder: FormBuilder, private router: Router) {
  }

  get name() {
    return this.itemForm.get('name')?.invalid;
  }

  get description() {
    return this.itemForm.get('description');
  }

  get price() {
    return this.itemForm.get('price');
  }

  get amount() {
    return this.itemForm.get('amount');
  }

  validateString(elementId: string, itemFormValue: string): boolean {
    let element = document.getElementById(elementId)!;
    if (itemFormValue.length > 0) {
      element.classList.remove('is-invalid');
      element.classList.add('is-valid');
      return true;
    } else {
      element.classList.remove('is-valid');
      element.classList.add('is-invalid');
      return false;
    }
  }

  validateNumber(elementId: string, itemFormValue: number): boolean {
    let element = document.getElementById(elementId)!;
    if (itemFormValue > 0) {
      element.classList.remove('is-invalid');
      element.classList.add('is-valid');
      return true;
    } else {
      element.classList.remove('is-valid');
      element.classList.add('is-invalid');
      return false;
    }
  }

  private isValidInput() {
    let validationArray = [
      this.validateString('name', this.itemForm.value.name!),
      this.validateString('description', this.itemForm.value.description!),
      this.validateNumber('price', this.itemForm.value.price!),
      this.validateNumber('amount', this.itemForm.value.amount!)]
    return !(validationArray.includes(false));
  }

  onSubmit() {
    // this.item = ({
    //   name: this.name,
    //   description: this.description,
    //   price: this.price,
    //   amount: this.amount
    // });
    if (this.isValidInput()) {
      this.itemService.addItem(this.itemForm.value)
        .subscribe(result => {
          this.message = 'ITEM CREATED';
          setTimeout(() => this.router.navigateByUrl(''), 2000);
        })
    }
  }
}
